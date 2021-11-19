/**
 * Created by Tuyen Tran on 11/02/2021.
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import { NgxSymbolService } from '../../service/symbol.service';
import { SvgSymbol } from './symbol.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngx-symbols',
    templateUrl: './symbol.component.html'
})
export class NgxSymbolsComponent implements OnDestroy {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private _subscriptions: Subscription[] = [];
    public symbols: SvgSymbol[] = [];

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(@Inject('SymbolService') private symbolService: NgxSymbolService,
                private cdr: ChangeDetectorRef) {
        this._subscriptions.push(
            this.symbolService.getSymbolAdded()
                .subscribe((newSymbol: SvgSymbol) => {
                    if (newSymbol) {
                        setTimeout(() => {
                            this.symbols.push(newSymbol);
                            this.cdr.markForCheck();
                        });
                    }
                })
        );
        this.cdr.markForCheck();
    }

    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------

    // implements OnDestroy
    ngOnDestroy() {
        // unsubscribe all subscriptions
        this._subscriptions.forEach(sub => sub && sub.unsubscribe());
        this._subscriptions.length = 0;
    }
}
