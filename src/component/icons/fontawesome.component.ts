/**
 * Created by Tuyen Tran on 11/02/2021.
 */

import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import {
    ANIMATION_VALUE_VALIDATOR,
    FLIP_VALUE_VALIDATOR,
    PULL_VALUE_VALIDATOR,
    ROTATE_VALUE_VALIDATOR,
    SCALE_VALUE_VALIDATOR,
    SIZE_VALUE_VALIDATOR,
    STACK_VALUE_VALIDATOR
} from './fontawesome.interface';

@Component({
    selector: 'fa',
    templateUrl: './fontawesome.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class NgxFontAwesomeComponent implements OnChanges {

    // -------------------------------------------------------------------------
    // Input & Output
    // -------------------------------------------------------------------------

    @Input() prefix: string;            // fad/fas/fab/far/fal
    @Input() name: string;              // icon name -> fa-${name}
    @Input() cssClass: string;          // additional CSS class
    @Input() title: string;             // tooltip text display when hovered
    @Input() alt: string;               // text alternative to support screen reader
    @Input() scale: number;             // [1-10] -> fa-[1x|2x|..|10x]
    @Input() size: string;              // [lg|sm|xs] -> fa-[lg|sm|xs]
    @Input() stack: number;             // [1-2] -> fa-stack-[1|2]x
    @Input() flip: string;              // [horizontal|vertical|both] -> fa-flip-[horizontal|vertical]
    @Input() pull: string;              // [right|left] -> fa-pull-[right|left]
    @Input() rotate: number;            // [90|180|270] -> fa-rotate-[90|180|270]
    @Input() rotateBy: number;          // angle
    @Input() animation: string;         // [spin|pulse] -> fa-spin|fa-pulse
    @Input() border: boolean;           // true -> fa-border
    @Input() fixedWidth: boolean;       // true -> fa-fw
    @Input() inverse: boolean;          // true -> fa-inverse

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    classList: Array<string>;
    vars: Map<string, string> = new Map<string, string>();
    allVars: string;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private _sanitizer: DomSanitizer) {
    }

    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (!changes) {
            return;
        }
        const prefix: string = this.prefix;

        Object.keys(changes).forEach(key => {
            const previousValue: string = changes[key].previousValue;
            const currentValue: string = changes[key].currentValue;
            const resetValue: boolean = (!!currentValue && typeof currentValue === 'string')
                ? (!currentValue || currentValue.trim().length === 0)
                : !currentValue;

            // console.log('key=' + key + ',previousValue=' + previousValue + ', currentValue=' + currentValue);
            switch (key) {
                case 'cssClass':
                    this._removeCssClasses(previousValue);
                    this._addCssClasses(currentValue);
                    break;

                case 'name':
                    if (!!previousValue) {
                        this._removeCssClass(`fa-${previousValue}`);
                    }
                    this._addCssClass(`fa-${currentValue}`);
                    break;

                case 'prefix':
                    this._removeCssClass(previousValue || prefix);
                    this._addCssClass(currentValue);
                    break;

                case 'scale': // 1 - 10
                    if (!resetValue && !SCALE_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid scale value [' + currentValue + ']. Supporting only from 1 to 10.');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-${previousValue}x`);
                    }
                    if (!resetValue) {
                        this._addCssClass(`fa-${currentValue}x`);
                    }
                    break;

                case 'size': // lg|sm|xs
                    if (!resetValue && !SIZE_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid size value [' + currentValue + ']. Supporting only [lg|sm|xs]');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-${previousValue}`);
                    }
                    if (!resetValue) {
                        this._addCssClass(`fa-${currentValue}`);
                    }
                    break;

                case 'stack':
                    if (!resetValue && !STACK_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid stack value [' + currentValue + ']. Supporting only 1 or 2.');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-stack-${previousValue}x`);
                    }
                    if (!resetValue) {
                        this._addCssClass(`fa-stack-${currentValue}x`);
                    }
                    break;

                case 'flip':
                    if (!resetValue && !FLIP_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid flip value [' + currentValue + ']. Supporting only [horizontal|vertical|both].');
                    }
                    // NOTE: fa-flip-both is only available in FontAwesome v5 CSS Styles
                    // For backward compatibility (v4), convert 'both' to 'horizontal' and 'vertical'
                    if (!!previousValue) {
                        if (previousValue === 'both') {
                            this._removeCssClass(`fa-flip-horizontal`);
                            this._removeCssClass(`fa-flip-vertical`);
                            this._removeCssClass(`fa-flip-both`);
                        } else {
                            this._removeCssClass(`fa-flip-${previousValue}`);
                        }
                    }
                    if (!resetValue) {
                        if (currentValue === 'both') {
                            this._removeCssClass(`fa-flip-horizontal`);
                            this._removeCssClass(`fa-flip-vertical`);
                        }
                        this._addCssClass(`fa-flip-${currentValue}`);
                    }
                    break;

                case 'pull':
                    if (!resetValue && !PULL_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid pull value [' + currentValue + ']. Supporting only [right|left].');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-pull-${previousValue}`);
                    }
                    if (!resetValue) {
                        this._addCssClass(`fa-pull-${currentValue}`);
                    }
                    break;

                case 'rotate':
                    if (!resetValue && !ROTATE_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid rotate value [' + currentValue + ']. Supporting only [90|180|270].');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-rotate-${previousValue}`);
                    }
                    if (!resetValue) {
                        this._addCssClass(`fa-rotate-${currentValue}`);
                    }
                    break;

                case 'rotateBy':
                    if (!resetValue && isNaN(Number(currentValue))) {
                        throw new Error('Invalid rotateBy value [' + currentValue + ']. Supporting only numeric value.');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-rotate-by`);
                        this.vars.delete('--fa-rotate-angle');
                    }
                    if (!resetValue) {
                        this.vars.set('--fa-rotate-angle', currentValue + 'deg');
                        this._addCssClass(`fa-rotate-by`);
                    }
                    this._updateVariables();
                    break;

                case 'animation':
                    // turn off animation by set to undefined/null
                    if (!resetValue && !ANIMATION_VALUE_VALIDATOR.test(currentValue)) {
                        throw new Error('Invalid animation value [' + currentValue + ']. Supporting only [spin|pulse].');
                    }
                    if (!!previousValue) {
                        this._removeCssClass(`fa-${previousValue}`);
                    }
                    if (!resetValue) {
                        this._addCssClass(`fa-${currentValue}`);
                    }
                    break;

                case 'border':
                    (!!currentValue) ? this._addCssClass('fa-border') : this._removeCssClass('fa-border');
                    break;

                case 'fixedWidth':
                    (!!currentValue) ? this._addCssClass(`fa-fw`) : this._removeCssClass(`fa-fw`);
                    break;

                case 'inverse':
                    (!!currentValue) ? this._addCssClass('fa-inverse') : this._removeCssClass('fa-inverse');
                    break;
            }
        });
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    public getSanitizedStyle(style: string): SafeStyle {
        return this._sanitizer.bypassSecurityTrustStyle(style);
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

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

    private _addCssClass(className: string): void {
        if (!this.classList) {
            this.classList = [];
        }
        // check uniqueness
        const index: number = this.classList.indexOf(className);
        if (index === -1) {
            this.classList.push(className);
        }
    }

    private _removeCssClass(className: string): void {
        if (!this.classList) {
            this.classList = [];
        }
        const index: number = this.classList.indexOf(className);
        if (index >= 0) {
            this.classList.splice(index, 1);
        }
    }

    private _updateVariables() {
        this.allVars = '';
        if (this.vars.size === 0) {
            return;
        }
        this.vars.forEach((value: string, key: string) => {
            this.allVars += key + ': ' + value + ';';
        });
    }
}
