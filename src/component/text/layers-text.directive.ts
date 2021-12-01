/**
 * Created by Tuyen Tran on 11/02/2021.
 */
import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChange } from '@angular/core';
import { FLIP_VALUE_VALIDATOR } from '../icons/fontawesome.interface';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

const UNITS_IN_GRID = 16;

@Directive({
    selector: '[faLayersText]'
    // Replaced with @HostBinding
    // host: {
    // 	'[class.fa-layers-text]': 'true', // Default class
    // 	'[style.transform]': 'performTransform ? getSanitizedStyle(transform) : null',
    // 	'[style.webkitTransform]': 'performTransform ? getSanitizedStyle(transform) : null'
    // }
})
export class NgxLayersTextDirective implements OnChanges {

    // -------------------------------------------------------------------------
    // Binding
    // -------------------------------------------------------------------------

    @HostBinding('class.fa-layers-text') defaultClass = true;

    @HostBinding('style.transform')
    get regularTransform() {
        return this.getTransform();
    }

    @HostBinding('style.webkitTransform')
    get webkitTransform() {
        return this.getTransform();
    }

    // -------------------------------------------------------------------------
    // Input & Output
    // -------------------------------------------------------------------------

    // scaling
    @Input() shrink: number;            // scale down  1/16 em
    @Input() grow: number;              // scale up    1/16 em

    // translating
    @Input() left: number;              // move left    1/16 em
    @Input() right: number;             // move right   1/16 em
    @Input() up: number;                // move up      1/16 em
    @Input() down: number;              // move down    1/16 em

    // rotating
    @Input() flip: string;              // [horizontal|vertical|both]
    @Input() rotate: number;            // angle in degree

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    performTransform: boolean;
    transform: string;

    private readonly _el: HTMLElement;
    private readonly _isIE: boolean;
    private _size = 16;
    private _posX = 0;
    private _posY = 0;
    private _rotX = 0;
    private _flipX = false;
    private _flipY = false;
    private _startCentered = true;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(el: ElementRef,
                private _sanitizer: DomSanitizer) {
        this._el = el.nativeElement;

        if (window && window.navigator && window.navigator.userAgent) {
            this._isIE = window.navigator.userAgent.indexOf('MSIE') > -1
                || window.navigator.userAgent.indexOf('Trident/') > -1;
        } else {
            this._isIE = false;
        }
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (!changes) {
            return;
        }
        Object.keys(changes).forEach(key => {
            const previousValue: string = changes[key].previousValue;
            const currentValue: string = changes[key].currentValue;
            const oldValue: number = previousValue ? parseFloat(previousValue) : 0;
            const newValue: number = currentValue ? parseFloat(currentValue) : 0;

            switch (key) {
                // scaling
                case 'shrink':
                case 'grow':
                    const operator: number = key === 'grow' ? +1 : -1;
                    this._size = this._size - operator * oldValue + operator * newValue;
                    break;

                // translating
                case 'left':
                case 'right':
                    const operator2: number = key === 'right' ? +1 : -1;
                    this._posX = this._posX - operator2 * oldValue + operator2 * newValue;
                    break;

                case 'up':
                case 'down':
                    const operator3: number = key === 'down' ? +1 : -1;
                    this._posY = this._posY - operator3 * oldValue + operator3 * newValue;
                    break;

                // rotating
                case 'rotate':
                    if (!isNaN(Number(currentValue))) {
                        this._rotX = newValue;
                    } else {
                        throw new Error('Invalid rotate value [' + currentValue + ']. Supporting only numeric value.');
                    }
                    break;

                case 'flip':
                    if (FLIP_VALUE_VALIDATOR.test(currentValue)) {
                        this._flipX = (currentValue === 'horizontal' || currentValue === 'both');
                        this._flipY = (currentValue === 'vertical' || currentValue === 'both');
                    } else {
                        throw new Error('Invalid flip value [' + currentValue + ']. Supporting only [horizontal|vertical|both].');
                    }
                    break;
            }
        });
        this.performTransform = this._flipX || this._flipY || this._size !== 16
                                || this._posX !== 0 || this._posY !== 0 || this._rotX !== 0;
        if (this.performTransform) {
            this._updateTransform();
        }
    }

    public getSanitizedStyle(style: string): SafeStyle {
        return this._sanitizer.bypassSecurityTrustStyle(style);
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private _updateTransform() {
        const d = UNITS_IN_GRID;
        let width: number = UNITS_IN_GRID;
        let height: number = UNITS_IN_GRID;
        if (this._isIE && this._el) {
            const computedFontSize = (this._el.style && this._el.style.fontSize) ? parseInt(this._el.style.fontSize, 10) : 16;
            // parseInt(window.getComputedStyle(this._el).fontSize, 10);
            const boundingClientRect = this._el.getBoundingClientRect();
            width = boundingClientRect.width / computedFontSize;
            height = boundingClientRect.height / computedFontSize;
        }

        this.transform = '';
        if (this._startCentered && this._isIE) {
            this.transform += 'translate('
                + (this._posX / d - width / 2) + 'em, '
                + (this._posY / d - height / 2) + 'em) ';
        } else if (this._startCentered) {
            this.transform += 'translate('
                + 'calc(-50% + ' + (this._posX / d) + 'em), '
                + 'calc(-50% + ' + (this._posY / d) + 'em)) ';
        } else {
            this.transform += 'translate(' + (this._posX / d) + 'em, ' + (this._posY / d) + 'em) ';
        }
        if (this._size !== 0 || this._flipX || this._flipY) {
            this.transform += 'scale('
                + (this._size / d * (this._flipX ? -1 : 1)) + ', '
                + (this._size / d * (this._flipY ? -1 : 1)) + ') ';
        }
        if (this._rotX !== 0) {
            this.transform += 'rotate(' + this._rotX + 'deg) ';
        }
        // console.log('Computed transform ' + this.transform);
    }

    private getTransform() {
        return this.performTransform ? this.getSanitizedStyle(this.transform) : null;
    }
}
