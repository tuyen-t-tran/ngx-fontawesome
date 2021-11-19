/**
 * Created by Tuyen Tran on 6/23/2018.
 */
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Inject, Injectable, Injector } from '@angular/core';
import {
    DEFAULT_NGX_FA_OPTIONS,
    IconBundles,
    IconDefinition,
    IconPack,
    NgxFAOptions,
    SvgSymbol
} from '../component/symbol/symbol.interface';
import { NgxSymbolsComponent } from '../component/symbol/symbol.component';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NgxSymbolService {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private _cachedSymbols: Map<string, SvgSymbol> = new Map<string, SvgSymbol>();
    private _registeredSymbols: Map<string, SvgSymbol> = new Map<string, SvgSymbol>();
    private _initialized = false;
    private readonly _options: NgxFAOptions;
    private readonly _iconBundles: IconBundles;
    private readonly _symbolAdded: Observable<SvgSymbol>;
    // source of observable
    private _symbolAddedSource: BehaviorSubject<SvgSymbol> = new BehaviorSubject<SvgSymbol>(null);

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private appRef: ApplicationRef,
                private injector: Injector,
                @Inject('ngxFontAwesome') options: NgxFAOptions) {
        this._symbolAdded = this._symbolAddedSource.asObservable();
        this._iconBundles = {};
        this._options = Object.assign({}, DEFAULT_NGX_FA_OPTIONS, options);
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    // get the state changed observable
    public getSymbolAdded(): Observable<SvgSymbol> {
        return this._symbolAdded;
    }

    public init() {
        if (!this._initialized) {
            if (this._options.svgSupport && this._options.prefix && this._options.prefix.length > 0) {
                this._options.prefix.forEach(p => this._iconBundles[p] = this.injector.get(p));
            }
            this._appendComponentToBody(NgxSymbolsComponent);
            this._initialized = true;
        }
    }

    public getSymbol(name: string, prefix: string): SvgSymbol {
        // create symbol ID
        const symbolId = `${prefix}-${name}`;

        // return if it existed
        let symbol: SvgSymbol = this._cachedSymbols.get(symbolId);
        if (symbol) {
            return symbol;
        }

        // look up the supporting Icon Pack (far/fas/fab...)
        const iconsPack: IconPack = this._iconBundles[prefix];
        if (!iconsPack) {
            return null;
        }

        // check if this glyph name is supported by icon pack
        const iconDef: IconDefinition = this._searchByName(iconsPack, name);
        if (!iconDef || !iconDef.icon) {
            return null;
        }

        // create symbol ID
        const icon = iconDef.icon;
        const width: number = icon[0];
        const height: number = icon[1];
        const cssClass: string = 'fa-w-' + Math.ceil(width / height * 16);

        symbol = {
            id: symbolId,
            name: name,
            width: width,
            height: height,
            prefix: prefix,
            cssClass: cssClass,
            path: icon[4]
        };
        // console.log('Symbol', newSymbol);
        this._cachedSymbols.set(symbolId, symbol);
        return symbol;
    }

    public registerSymbol(name: string, prefix: string): SvgSymbol {
        // create symbol ID
        const symbolId = `${prefix}-${name}`;

        // return if it existed
        let symbol: SvgSymbol = this._registeredSymbols.get(symbolId);
        if (symbol) {
            return symbol;
        }

        // start creating new symbol
        symbol = this.getSymbol(name, prefix);
        // console.log('Symbol', newSymbol);
        if (symbol) {
            this._registeredSymbols.set(symbolId, symbol);
            this._symbolAddedSource.next(symbol);
        }
        return symbol;
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private _searchByName(iconPacks: IconPack, name: string): IconDefinition {
        const found: string = Object.keys(iconPacks).find((glyphName: string) => {
            const iconDef: IconDefinition = iconPacks[glyphName];
            return iconDef.iconName === name;
        });
        return found ? iconPacks[found] : null;
    }

    private _appendComponentToBody(component: any) {
        // 1. Create a component reference from the component
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body as the first child
        document.body.insertBefore(domElem, document.body.children.item(0));
    }
}
