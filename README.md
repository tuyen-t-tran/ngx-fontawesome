**NOTE: This library supports only FontAwesome version 5+.<br/>
If you are using FontAwesome 4, please use [@ui4ngx/fontawesome4](https://github.com/tuyenttran/ngx-fontawesome4).**

# @ui4ngx/fontawesome


[![npm Version](https://img.shields.io/npm/v/@ui4ngx/fontawesome.svg)](https://www.npmjs.com/package/@ui4ngx/fontawesome)
[![Build Status](https://app.travis-ci.com/tuyenttran/ngx-fontawesome.svg?branch=master)](https://travis-ci.com/tuyenttran/ngx-fontawesome )
> Another Angular way to display FontAwesome (v5+)

## Demo

Check out the **[demo](https://tuyenttran.github.io/ngx-fontawesome/)**.


## Install

**1. Install Packages**

`npm install @fortawesome/fontawesome-free@^5.15.4`

`npm install @ui4ngx/fontawesome`

**2. Import the module:**

There are multiple ways to use FontAwesome v5+.<br/>

Both WebFont and SVG icons are available since version 5 and each type can be used independently or together.<br/>

The following is how to set up your project to use WebFont or SVG or both.

2.1 **Using WebFont Icons**

2.1.1. _Install CSS Styles and Web Fonts_

_If you're NOT using [Angular CLI](https://github.com/angular/angular-cli), FontAwesome 5 can be downloaded at<br/>
https://fontawesome.com/download

Clicking on *[Free For Web]* under Font Awesome 5 section, you will be able to get this file
```fontawesome-free-5.15.4-web.zip ```

Extract the ZIP file and copy CSS and WebFont files to `assets/css` and `assets/webfonts` folder respectively._

**Project structure** 

```
src/           
|- assets/
|  |- css/
|      |- all.css  <-- from zip file downloaded earlier.
|  |- webfonts/
|      |- fa-brands-400.eot   <-- the following are required for Brand icons ('fab' prefix)
|      |- fa-brands-400.svg
|      |- fa-brands-400.ttf
|      |- fa-brands-400.woff
|      |- fa-brands-400.woff2
|      |- fa-regular-400.eot  <-- the following are required for Regular icons ('far' prefix)
|      |- fa-regular-400.svg
|      |- fa-regular-400.ttf
|      |- fa-regular-400.woff
|      |- fa-regular-400.woff2
|      |- fa-solid-900.eot    <-- the following are required for Solid icons ('fas' prefix)
|      |- fa-solid-900.svg
|      |- fa-solid-900.ttf
|      |- fa-solid-900.woff
|      |- fa-solid-900.woff2
|  +- ...      
```

_If you're using [Angular CLI](https://github.com/angular/angular-cli), add to `styles` inside the `angular.json` (Angular CLI v6.0.0+) or `angular-cli.json` (older version of Angular CLI)_
```js
{
    "styles":
    [
        // if download Font Awesome package manually
        "src/assets/css/all.css",
        // if install Font Awesome package with npm
        "node_modules/@fortawesome/fontawesome-free/css/all.css", 
        "node_modules/@ui4ngx/fontawesome/css/ngx-fontawesome.scss"
    ]
}
```

_If you're NOT using the CLI, import the stylesheet to your `index.html` file. <br/>
This way CSS styles and Web Fonts will be downloaded automatically._
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
```


2.1.2. _Import the module_

```typescript
import { NgxFontAwesomeModule } from '@ui4ngx/fontawesome';

@NgModule({
  //...
  imports: [
    //...
    NgxFontAwesomeModule
  ],
  //...
})
export class AppModule { }
```


2.2 **Using SVG Icons**

2.2.1. _Install CSS Styles_

_If you're NOT using [Angular CLI](https://github.com/angular/angular-cli), FontAwesome 5 can be downloaded at<br/>
https://fontawesome.com/download

Clicking on *[Free For Web]* under Font Awesome 5 section, you will be able to get this file
```fontawesome-free-5.15.4-web.zip ```

Extract the ZIP file and copy `svg-with-js.css` file to `assets/css` folder.

**Project structure**

```
src/           
|- assets/
|  |- css/
|      |- svg-with-js.css  <-- from zip file downloaded earlier 
|  +- ...      
```

_If you're using [Angular CLI](https://github.com/angular/angular-cli), add to `styles` inside the `angular.json` (Angular CLI v6.0.0+) or `angular-cli.json` (older version of Angular CLI)_
```js
{
    "styles":
    [
        // if download Font Awesome package manually
        "src/assets/css/svg-with-js.css",
        // if install Font Awesome package with npm
        "node_modules/@fortawesome/fontawesome-free/css/svg-with-js.css", 
        "node_modules/@ui4ngx/fontawesome/css/ngx-fontawesome.scss"
    ]
}
```
_If you're NOT using the CLI, import the stylesheet to your `index.html` file_
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/svg-with-js.css">
```

2.2.2. _Install SVG Definitions_

`npm install --save @fortawesome/free-brands-svg-icons`

`npm install --save @fortawesome/free-regular-svg-icons`

`npm install --save @fortawesome/free-solid-svg-icons`

2.2.3. _Import the module_

```typescript
//...
import { NgxFontAwesomeModule } from '@ui4ngx/fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  //...
  imports: [
    //...
    NgxFontAwesomeModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: 'fab', useValue: fab},
    {provide: 'far', useValue: far},
    {provide: 'fas', useValue: fas},
    // @ui4ngx/fontawesome options
    {provide: 'ngxFontAwesome', useValue: {svgSupport: true, prefix: ['far', 'fas', 'fab']}}
  ]
  //...
})
export class AppModule { }
```

**NgxFAOptions** <br/>

Used to configure the *@ui4ngx/fontawesome* module<br/>
Supplied in providers<br/>

Name      | Type          | Default value   | Optional
---       | ---           | ---             | ---
prefix    | `String[]`    | `[]`            | Yes
svgSupport| `Boolean`     | `false`         | Yes


_If you're using SystemJS, add to `systemjs.config.js`_
```json
map: {
    
    '@fortawesome/free-brands-svg-icons': 'npm:@fortawesome/free-brands-svg-icons/index.js',
    '@fortawesome/free-solid-svg-icons': 'npm:@fortawesome/free-solid-svg-icons/index.js',
    '@fortawesome/free-regular-svg-icons': 'npm:@fortawesome/free-regular-svg-icons/index.js',
    
}
```

## Features

**&lt;fa&gt;** Component 

*Note:* This component only works when your project is configured to work with WebFont icons

*Attributes*

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
prefix    | `String`           | `far, fas, fab`                           | No
name      | `String`           | Icon [Name](http://fontawesome.io/icons/) | No
title     | `String`           | Tooltip to display when hovered           | Yes
alt       | `String`           | Text alternative to support screen reader | Yes
animation | `String`           | `spin, pulse`                             | Yes
cssClass  | `String`           | Additional CSS classes                    | Yes
pull      | `String`           | `left, right`                             | Yes
scale     | `Number`           | `2 - 10`                                  | Yes
size      | `String`           | `lg, sm, xs`                              | Yes
stack     | `Number`           | `1,2`                                     | Yes
rotate    | `Number`           | `90, 180, 270`                            | Yes
rotateBy  | `Number`           | Angle in degree,  etc `45, 30,...`        | Yes
flip      | `String`           | `horizontal, vertical, both`              | Yes
border    | `Boolean`          | `true, false`                             | Yes
fixedWidth| `Boolean`          | `true, false`                             | Yes
inverse   | `Boolean`          | `true, false`                             | Yes

*Syntax*

```html
<fa prefix="far|fas|fab"
        name="..."
        title="Text to show when hovered"
        alt="Text alternative for screen reader"
        cssClass="..."
        pull="left|right"
        scale="2|3|4|5|6|7|8|9|10"
        size="xs|sm|lg"
        stack="1|2"
        rotate="90|180|270"
        rotateBy="45"
        flip="horizontal|vertical|both"
        animation="pulse|spin"
        border="true"
        fixedWidth="true"
        inversed="true"></fa>
```

**&lt;fa-svg&gt;** Component

*Note:* This component only works when your project is configured to work with SVG icons.

*Attributes*

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
prefix    | `String`           | `far, fas, fab`                           | No
name      | `String`           | Icon [Name](http://fontawesome.io/icons/) | No
title     | `String`           | Tooltip to display when hovered           | Yes
alt       | `String`           | Text alternative to support screen reader | Yes
animation | `String`           | `spin, pulse`                             | Yes
cssClass  | `String`           | Additional CSS classes                    | Yes
shrink    | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
grow      | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
up        | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
down      | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
left      | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
right     | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
rotate    | `Number`           | Angle in degree,  etc `45, 30,...`        | Yes
flip      | `String`           | `horizontal, vertical, both`              | Yes
inverse   | `Boolean`          | `true, false`                             | Yes
maskPrefix| `String`           | Prefix (`far, fas, fab`) for mask icon    | Yes
maskName  | `String`           | [Name](http://fontawesome.io/icons/) for mask icon | Yes


*Syntax*

```html
<fa-svg prefix="far|fas|fab"
        name="..."
        title="Text to show when hovered"
        alt="Text alternative for screen reader"
        cssClass="..."
        shrink="8"
        grow="16"
        up="32"
        down="32"
        left="16"
        right="16"
        rotate="45"
        flip="horizontal|vertical|both"
        animation="pulse|spin"
        inversed="true"
        maskPrefix="far|fas|fab"
        maskName="..."></fa-svg>
```


**[faLayersText]** Directive

*Note:* This Utility directive provides support to FontAwesome by adding transformations (scaling, translation and rotation) to text. 
It will work regardless of supporting icon type.

*Attributes*

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
shrink    | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
grow      | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
up        | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
down      | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
left      | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
right     | `Number`           | `8, 16,32, ...` (1/16em)                  | Yes
rotate    | `Number`           | Angle in degree,  etc `45, 30,...`        | Yes
flip      | `String`           | `horizontal, vertical, both`              | Yes

*Syntax*

```html
<span faLayersText 
        shrink="8"
        grow="16"
        up="32"
        down="32"
        left="16"
        right="16"
        rotate="45"
        flip="horizontal|vertical|both"
        ...
        ></span>
```

## NPM version explained

NPM Version will be used to identify 
<li>the version of Angular (Major Version number) 
<li>the version of Font Awesome (Minor Version number)
<li>changes or updates of the library


####For example:

Version   | Angular Version    | Font Awesome Version      | Library version
---       | ---                | ---                       | ---
`5.5.1`   | `^5.0.0`           | Support v5+ (`^5.15.4`)   | `1` Initial commit
`7.5.2`   | `^7.0.0`           | Support v5+ (`^5.15.4`)   | `2` Etc. Bug fixes and improvements ...
`...`     | `...`              | `...`                     | `...`
`8.5.10`  | `^8.0.0`           | Support v5+ (`^5.15.4`)   | `10` Etc. Upgrade and new feature ...
`8.6.10`  | `^8.0.0`           | Support v6+               | `10` Etc. Upgrade and new feature ...
`9.6.11`  | `^8.0.0`           | Support v6+               | `10` Etc. Upgrade and new feature ...

You got the idea.

## TODO

- Add Dual-Tone FontAwesome (fad) support.
- Add unit tests and integration test
- Improve **[demo](https://tuyenttran.github.io/ngx-fontawesome/)** page

## License

MIT © [Tuyen T Tran](mailto:anhtuyen.tran@gmail.com)
