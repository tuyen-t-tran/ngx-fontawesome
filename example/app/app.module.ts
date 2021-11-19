import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';
import { NgxFontAwesomeModule } from '../../src/ngx-fontawesome.module';

import { AppComponent } from './app.component';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
    imports: [
        BrowserModule,
        HighlightJsModule,
        NgxFontAwesomeModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [
        { provide: 'fab', useValue: fab },
        { provide: 'far', useValue: far },
        { provide: 'fas', useValue: fas },
        { provide: 'ngxFontAwesome', useValue: { svgSupport: true, prefix: [ 'far', 'fas', 'fab' ] } }
    ]
})
export class AppModule {
}
