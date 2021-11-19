/**
 * Created by Tuyen Tran on 11/02/2021.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_NGX_FA_OPTIONS } from './component/symbol/symbol.interface';
import { NgxSymbolService } from './service/symbol.service';
import { NgxSymbolsComponent } from './component/symbol/symbol.component';
import { NgxFontAwesomeSvgComponent } from './component/icons/fontawesome-svg.component';
import { NgxFontAwesomeComponent } from './component/icons/fontawesome.component';
import { NgxLayersTextDirective } from './component/text/layers-text.directive';

@NgModule({
    entryComponents: [
        NgxSymbolsComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [
        NgxFontAwesomeComponent,
        NgxFontAwesomeSvgComponent,
        NgxLayersTextDirective,
        NgxSymbolsComponent
    ],
    providers: [
        { provide: 'ngxFontAwesome', useValue: DEFAULT_NGX_FA_OPTIONS },
        { provide: 'SymbolService', useClass: NgxSymbolService }
    ],
    exports: [
        NgxFontAwesomeComponent,
        NgxFontAwesomeSvgComponent,
        NgxLayersTextDirective,
        NgxSymbolsComponent
    ]
})
export class NgxFontAwesomeModule {
}
