/**
 * Created by Tuyen Tran on 11/02/2021.
 */

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    Input,
    OnChanges,
    SimpleChange,
    ViewEncapsulation
} from '@angular/core';
import { NgxSymbolService } from '../../service/symbol.service';
import { SvgSymbol } from '../symbol/symbol.interface';
import { RandomUtils } from '../../utils/random-utils';
import { ANIMATION_VALUE_VALIDATOR } from './fontawesome.interface';

@Component({
    selector: 'fa-svg',
    templateUrl: './fontawesome-svg.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class NgxFontAwesomeSvgComponent implements OnChanges {

    // -------------------------------------------------------------------------
    // Input & Output
    // -------------------------------------------------------------------------

    @Input() prefix: string;            // fad/fas/fab/far/fal
    @Input() name: string;              // icon name
    @Input() cssClass: string;          // additional CSS class
    @Input() title: string;             // title
    // scaling
    @Input() shrink: number;
    @Input() grow: number;
    // translate
    @Input() left: number;
    @Input() right: number;
    @Input() up: number;
    @Input() down: number;
    // rotate
    @Input() flip: string;              // [horizontal|vertical|both]
    @Input() rotate: number;            // angle

    @Input() maskPrefix: string;        // fas/fab/far/fal
    @Input() maskName: string;

    @Input() animation: string;         // [spin|pulse] -> fa-spin|fa-pulse
    @Input() inverse: boolean;          // true -> fa-inverse

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    classList: Array<string>;
    svgSymbol: SvgSymbol;
    maskSymbol: SvgSymbol;
    componentId: string;

    inlineSvg = false;
    useMask = false;
    symbolTransform: string;
    outerTransform: string;
    innerTransform: string;
    pathTransform: string;

    private _size = 16;
    private _posX = 0;
    private _posY = 0;
    private _rotX = 0;
    private _flipX = false;
    private _flipY = false;
    private _el: HTMLElement;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(el: ElementRef,
                private _cdr: ChangeDetectorRef,
                @Inject('SymbolService') private _symbolService: NgxSymbolService) {
        this._el = el.nativeElement;
        this.componentId = 'fa-svg-' + RandomUtils.getRandomString(8);
        this._symbolService.init();
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
            const oldValue = previousValue ? parseFloat(previousValue) : 0;
            const newValue = currentValue ? parseFloat(currentValue) : 0;
            const resetValue = (!!currentValue && typeof currentValue === 'string')
                ? (!currentValue || currentValue.trim().length === 0)
                : !currentValue; // (typeof currentValue === 'number' ? currentValue === 0 : !currentValue);

            switch (key) {
                case 'cssClass':
                    this._removeCssClasses(previousValue);
                    this._addCssClasses(currentValue);
                    break;

                case 'name':
                    this._updateSymbol(this.prefix, currentValue);
                    break;

                case 'prefix':
                    this._updateSymbol(currentValue, this.name);
                    break;

                case 'maskName':
                    this.useMask = this.maskName
                        && this.maskName.trim().length > 0
                        && this.maskPrefix
                        && this.maskPrefix.trim().length > 0;
                    this._updateSymbol(this.maskPrefix, currentValue, true);
                    break;

                case 'maskPrefix':
                    this.useMask = this.maskName
                        && this.maskName.trim().length > 0
                        && this.maskPrefix
                        && this.maskPrefix.trim().length > 0;
                    this._updateSymbol(currentValue, this.maskName, true);
                    break;

                // scaling
                case 'shrink':
                case 'grow':
                    const operator = key === 'grow' ? +1 : -1;
                    this._size = this._size - operator * oldValue + operator * newValue;
                    break;

                // translating
                case 'left':
                case 'right':
                    const operator2 = key === 'right' ? +1 : -1;
                    this._posX = this._posX - operator2 * oldValue + operator2 * newValue;
                    break;

                case 'up':
                case 'down':
                    const operator3 = key === 'down' ? +1 : -1;
                    this._posY = this._posY - operator3 * oldValue + operator3 * newValue;
                    break;

                // rotating
                case 'rotate':
                    this._rotX = newValue;
                    break;

                case 'flip':
                    this._flipX = (currentValue === 'horizontal' || currentValue === 'both');
                    this._flipY = (currentValue === 'vertical' || currentValue === 'both');
                    break;

                case 'animation':
                    // turn off animation by set to undefined/null
                    if (!resetValue && !ANIMATION_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid animation value [' + currentValue + ']. Supporting only [spin|pulse].');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-svg-${previousValue}`);
                    }
                    if (!resetValue) {
                        this._addCssClass(`fa-svg-${currentValue}`);
                    }
                    break;

                case 'inverse':
                    (!!currentValue) ? this._addCssClass('fa-inverse') : this._removeCssClass('fa-inverse');
                    break;
            }
        });
        this.inlineSvg = this.useMask || this._flipX || this._flipY || this._size !== 0
            || this._posX !== 0 || this._posY !== 0 || this._rotX !== 0;
        if (this.inlineSvg) {
            this._addCssClass('svg-inline--fa');
            this._updateSymbolTransform();
        } else {
            this._removeCssClass('svg-inline--fa');
        }
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private _updateSymbolTransform() {
        if (!this.svgSymbol || (this.useMask && !this.maskSymbol)) {
            return;
        }
        const containerWidth = this.useMask ? this.maskSymbol.width : this.svgSymbol.width;
        const width = this.svgSymbol.width;
        const height = this.svgSymbol.height;
        const offsetX = width / height / 2;
        const offsetY = 0.5;

        this.symbolTransform = (offsetX + this._posX / 16) + 'em ' + (offsetY + this._posY / 16) + 'em';

        this.outerTransform = 'translate(' + containerWidth / 2 + ' 256)';

        const innerTranslate = (this._posX !== 0 || this._posY !== 0)
            ? 'translate(' + this._posX * 32 + ', ' + this._posY * 32 + ') '
            : '';

        const innerScale = (this._size !== 0 || this._flipX || this._flipY)
            ? 'scale(' + this._size / 16 * (this._flipX ? -1 : 1) + ', ' + this._size / 16 * (this._flipY ? -1 : 1) + ') '
            : '';
        const innerRotate = (this._rotX !== 0)
            ? 'rotate(' + this._rotX + ' 0 0)'
            : '';

        this.innerTransform = innerTranslate + innerScale + innerRotate;
        this.pathTransform = 'translate(' + width / 2 * -1 + ' -256)';
    }

    private _updateSymbol(prefix: string, iconName: string, forMask = false) {
        if (!prefix || prefix.trim().length === 0
            || !iconName || iconName.trim().length === 0) {
            return;
        }
        const symbol: SvgSymbol = this.inlineSvg
            ? this._symbolService.getSymbol(iconName, prefix)
            : this._symbolService.registerSymbol(iconName, prefix);
        if (!symbol) {
            return;
        }
        if (forMask) {
            this.maskSymbol = symbol;
        } else {
            this.svgSymbol = symbol;
        }
        this._addCssClasses(symbol.cssClass);
        this._cdr.markForCheck();
    }

    private _addCssClasses(cssClasses: string) {
        if (cssClasses && cssClasses.indexOf(' ') > -1) {
            const classNames: string[] = cssClasses.split(' ');
            if (classNames.length > 1) {
                classNames.forEach(className => {
                    this._addCssClass(className);
                });
            }
        } else {
            this._addCssClass(cssClasses);
        }
    }

    private _removeCssClasses(cssClasses: string) {
        if (cssClasses && cssClasses.indexOf(' ') > -1) {
            const classNames: string[] = cssClasses.split(' ');
            if (classNames.length > 1) {
                classNames.forEach(className => {
                    this._removeCssClass(className);
                });
            }
        } else {
            this._removeCssClass(cssClasses);
        }
    }

    _addCssClass(className: string): void {
        if (!this.classList) {
            this.classList = [];
        }
        // check uniqueness
        const index = this.classList.indexOf(className);
        if (index === -1) {
            this.classList.push(className);
        }
    }

    _removeCssClass(className: string): void {
        if (!this.classList) {
            this.classList = [];
        }
        const index = this.classList.indexOf(className);
        if (index >= 0) {
            this.classList.splice(index, 1);
        }
    }
}
