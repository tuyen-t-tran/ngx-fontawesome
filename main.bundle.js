webpackJsonp(["main"],{

/***/ "../../../../../config/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../example/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n\r\n<header class=\"demo-app-header\">\r\n    <div class=\"rt-container\">\r\n        <div class=\"col-rt-12\">\r\n            <div class=\"rt-heading\">\r\n                <h1>Angular Font Awesome</h1>\r\n                <h2>Another Angular way to display FontAwesome (v5+)</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n<section class=\"docs-generated\">\r\n    <div class=\"rt-container\">\r\n        <div class=\"col-rt-12\">\r\n            <div class=\"tab-wrap\">\r\n                <input type=\"radio\" id=\"tab-font-type-1\" name=\"tab-group-font-type\" class=\"tab\" checked>\r\n                <label for=\"tab-font-type-1\">Web Font</label>\r\n\r\n                <input type=\"radio\" id=\"tab-font-type-2\" name=\"tab-group-font-type\" class=\"tab\">\r\n                <label for=\"tab-font-type-2\">SVG</label>\r\n\r\n                <!-- WEB FONTS -->\r\n                <div class=\"tab__content\">\r\n\r\n                    <!-- WEB-FONT SIZING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Sizing & Scaling Icons</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <p>Set the attribute <code class=\"inline\">scale</code> or <code class=\"inline\">size</code>\r\n                        to increase or decrease the size of icons relative to the inherited <code class=\"inline\">font-size</code>.\r\n                    </p>\r\n                    <div class=\"show-off\">\r\n                        <fa prefix=\"fas\" name=\"camera\" size=\"xs\"></fa>\r\n                        <fa prefix=\"fas\" name=\"camera\" size=\"sm\"></fa>\r\n                        <fa prefix=\"fas\" name=\"camera\" size=\"lg\"></fa>\r\n                        <fa prefix=\"fas\" name=\"camera\" scale=\"2\"></fa>\r\n                        <fa prefix=\"fas\" name=\"camera\" scale=\"3\"></fa>\r\n                        <fa prefix=\"fas\" name=\"camera\" scale=\"5\"></fa>\r\n                        <fa prefix=\"fas\" name=\"camera\" scale=\"7\"></fa>\r\n                        <fa prefix=\"fas\" name=\"camera\" scale=\"10\"></fa>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <!-- active tab on page load gets checked attribute -->\r\n                        <input type=\"radio\" id=\"tab-sizing-scaling1\" name=\"tab-group-sizing-scaling\" class=\"tab\">\r\n                        <label for=\"tab-sizing-scaling1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-sizing-scaling2\" name=\"tab-group-sizing-scaling\" class=\"tab\"\r\n                               checked>\r\n                        <label for=\"tab-sizing-scaling2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<i class=\"fas fa-camera fa-xs\"></i>\r\n<i class=\"fas fa-camera fa-sm\"></i>\r\n<i class=\"fas fa-camera fa-lg\"></i>\r\n<i class=\"fas fa-camera fa-2x\"></i>\r\n<i class=\"fas fa-camera fa-3x\"></i>\r\n<i class=\"fas fa-camera fa-5x\"></i>\r\n<i class=\"fas fa-camera fa-7x\"></i>\r\n<i class=\"fas fa-camera fa-10x\"></i>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<fa prefix=\"fas\" name=\"camera\" size=\"xs\"></fa>\r\n<fa prefix=\"fas\" name=\"camera\" size=\"sm\"></fa>\r\n<fa prefix=\"fas\" name=\"camera\" size=\"lg\"></fa>\r\n<fa prefix=\"fas\" name=\"camera\" scale=\"2\"></fa>\r\n<fa prefix=\"fas\" name=\"camera\" scale=\"3\"></fa>\r\n<fa prefix=\"fas\" name=\"camera\" scale=\"5\"></fa>\r\n<fa prefix=\"fas\" name=\"camera\" scale=\"7\"></fa>\r\n<fa prefix=\"fas\" name=\"camera\" scale=\"10\"></fa>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"docs-generated table-wrap\">\r\n                        <table>\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"align-left\">FA Class</th>\r\n                                <th class=\"align-left\">Size (em)</th>\r\n                                <th class=\"align-left\"><code class=\"inline\">&lt;fa&gt;</code> attribute</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-xs</code></td>\r\n                                <td class=\"align-left\">.75</td>\r\n                                <td class=\"align-left\"><code class=\"inline\">size=\"xs\"</code></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-xs</code></td>\r\n                                <td class=\"align-left\">.875</td>\r\n                                <td class=\"align-left\"><code class=\"inline\">size=\"sm\"</code></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-lg</code>(*)</td>\r\n                                <td class=\"align-left\">1.33</td>\r\n                                <td class=\"align-left\"><code class=\"inline\">size=\"lg\"</code></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\" colspan=\"3\">(*) Also applies style=\"<code class=\"inline\">vertical-align:\r\n                                    -25%</code>\"\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-2x</code>/../<code\r\n                                    class=\"inline\">fa-10x</code></td>\r\n                                <td class=\"align-left\">1/../10</td>\r\n                                <td class=\"align-left\"><code class=\"inline\">scale=\"1\"</code>/../<code class=\"inline\">scale=\"10\"</code>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <!-- WEB-FONT FIXED-WIDTH -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Fixed Width Icons</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/fixed-width-icons\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"show-off\">\r\n                        <div style=\"font-size: 2rem;\">\r\n                            <div>\r\n                                <fa prefix=\"fas\" name=\"skating\" fixedWidth=\"true\" cssClass=\"darkblue-background\"></fa>\r\n                                Skating\r\n                            </div>\r\n                            <div>\r\n                                <fa prefix=\"fas\" name=\"skiing\" fixedWidth=\"true\" cssClass=\"lightblue-background\"></fa>\r\n                                Skiing\r\n                            </div>\r\n                            <div>\r\n                                <fa prefix=\"fas\" name=\"skiing-nordic\" fixedWidth=\"true\"\r\n                                    cssClass=\"darkblue-background\"></fa>\r\n                                Nordic Skiing\r\n                            </div>\r\n                            <div>\r\n                                <fa prefix=\"fas\" name=\"snowboarding\" fixedWidth=\"true\"\r\n                                    cssClass=\"lightblue-background\"></fa>\r\n                                Snowboarding\r\n                            </div>\r\n                            <div>\r\n                                <fa prefix=\"fas\" name=\"snowplow\" fixedWidth=\"true\" cssClass=\"darkblue-background\"></fa>\r\n                                Snowplow\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-fixed-width1\" name=\"tab-group-fixed-width\" class=\"tab\">\r\n                        <label for=\"tab-fixed-width1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-fixed-width2\" name=\"tab-group-fixed-width\" class=\"tab\" checked>\r\n                        <label for=\"tab-fixed-width2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div style=\"font-size: 2rem;\">\r\n  <div><i class=\"fas fa-skating fa-fw\" style=\"background:DodgerBlue\"></i> Skating</div>\r\n  <div><i class=\"fas fa-skiing fa-fw\" style=\"background:SkyBlue\"></i> Skiing</div>\r\n  <div><i class=\"fas fa-skiing-nordic fa-fw\" style=\"background:DodgerBlue\"></i> Nordic Skiing</div>\r\n  <div><i class=\"fas fa-snowboarding fa-fw\" style=\"background:SkyBlue\"></i> Snowboarding</div>\r\n  <div><i class=\"fas fa-snowplow fa-fw\" style=\"background:DodgerBlue\"></i> Snowplow</div>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.lightblue-background {\r\n  background: SkyBlue;\r\n}\r\n.darkblue-background {\r\n  background: DodgerBlue;\r\n}\r\n                    </textarea>\r\n                            <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div style=\"font-size: 2rem;\">\r\n  <div><fa prefix=\"fas\" name=\"skating\" fixedWidth=\"true\" cssClass=\"darkblue-background\"></fa> Skating</div>\r\n  <div><fa prefix=\"fas\" name=\"skiing\" fixedWidth=\"true\" cssClass=\"lightblue-background\"></fa> Skiing</div>\r\n  <div><fa prefix=\"fas\" name=\"skiing-nordic\" fixedWidth=\"true\" cssClass=\"darkblue-background\"></fa> Nordic Skiing</div>\r\n  <div><fa prefix=\"fas\" name=\"snowboarding\" fixedWidth=\"true\" cssClass=\"lightblue-background\"></fa> Snowboarding</div>\r\n  <div><fa prefix=\"fas\" name=\"snowplow\" fixedWidth=\"true\" cssClass=\"darkblue-background\"></fa> Snowplow</div>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- WEB-FONT ROTATING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Rotating Icons</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/rotating-icons\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <p>Set attribute <code class=\"inline\">rotate</code> or <code class=\"inline\">rotateBy</code> to\r\n                        rotate an icon.\r\n                    </p>\r\n                    <p>However, the attribute <code class=\"inline\">rotate</code> only takes one of these values: <code\r\n                        class=\"inline\">90, 180, 270</code>.</p>\r\n                    <p>To rotate the icon by an arbitrary angle, use the attribute <code class=\"inline\">rotateBy</code>\r\n                    </p>\r\n                    <p>Set attribute <code class=\"inline\">flip</code> to flip, or mirror an icon horizontally,\r\n                        vertically or both.\r\n                    </p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <fa prefix=\"fas\" name=\"snowboarding\" title=\"original\"></fa>\r\n                            <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"90\" title=\"rotate 90 degree\"></fa>\r\n                            <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"180\" title=\"rotate 180 degree\"></fa>\r\n                            <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"270\" title=\"rotate 270 degree\"></fa>\r\n                            <fa prefix=\"fas\" name=\"snowboarding\" flip=\"horizontal\" title=\"flip horizontally\"></fa>\r\n                            <fa prefix=\"fas\" name=\"snowboarding\" flip=\"vertical\" title=\"flip vertically\"></fa>\r\n                            <fa prefix=\"fas\" name=\"snowboarding\" flip=\"both\"\r\n                                title=\"flip both horizontally and vertically\"></fa>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <!-- active tab on page load gets checked attribute -->\r\n                        <input type=\"radio\" id=\"tab1\" name=\"tab-group-rotation\" class=\"tab\">\r\n                        <label for=\"tab1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab2\" name=\"tab-group-rotation\" class=\"tab\" checked>\r\n                        <label for=\"tab2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <i class=\"fas fa-snowboarding\"></i>\r\n    <i class=\"fas fa-snowboarding fa-rotate-90\"></i>\r\n    <i class=\"fas fa-snowboarding fa-rotate-180\"></i>\r\n    <i class=\"fas fa-snowboarding fa-rotate-270\"></i>\r\n    <i class=\"fas fa-snowboarding fa-flip-horizontal\"></i>\r\n    <i class=\"fas fa-snowboarding fa-flip-vertical\"></i>\r\n    <i class=\"fas fa-snowboarding fa-flip-both\"></i>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <fa prefix=\"fas\" name=\"snowboarding\" title=\"original\"></fa>\r\n    <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"90\" title=\"rotate 90 degree\"></fa>\r\n    <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"180\" title=\"rotate 180 degree\"></fa>\r\n    <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"270\" title=\"rotate 270 degree\"></fa>\r\n    <fa prefix=\"fas\" name=\"snowboarding\" flip=\"horizontal\" title=\"flip horizontally\"></fa>\r\n    <fa prefix=\"fas\" name=\"snowboarding\" flip=\"vertical\" title=\"flip vertically\"></fa>\r\n    <fa prefix=\"fas\" name=\"snowboarding\" flip=\"both\" title=\"flip both horizontally and vertically\"></fa>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"docs-generated table-wrap\">\r\n                        <table>\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"align-left\">FA Class</th>\r\n                                <th class=\"align-left\"><code class=\"inline\">&lt;fa&gt;</code> attribute</th>\r\n                                <th class=\"align-left\">Rotation Amount</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-rotate-90</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">rotate=\"90\"</code></td>\r\n                                <td class=\"align-left\">90°</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-rotate-180</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">rotate=\"180\"</code></td>\r\n                                <td class=\"align-left\">180°</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-rotate-270</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">rotate=\"270\"</code></td>\r\n                                <td class=\"align-left\">270°</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-rotate-by</code>/<code>--fa-rotate-angle:\r\n                                    Ndeg;</code>\r\n                                </td>\r\n                                <td class=\"align-left\"><code class=\"inline\">rotateBy=\"N\"</code></td>\r\n                                <td class=\"align-left\">arbitrary angle (in deg)</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-flip-horizontal</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">flip=\"horizontal\"</code></td>\r\n                                <td class=\"align-left\">mirrors icon horizontally</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-flip-vertical</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">flip=\"vertical\"</code></td>\r\n                                <td class=\"align-left\">mirrors icon vertically</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-flip-both</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">flip=\"both\"</code></td>\r\n                                <td class=\"align-left\">mirrors icon vertically and horizontally</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <!-- ROTATING + FLIPPING -->\r\n                    <div class=\"demo-section\">\r\n                        <h4>Combining Rotating + Flipping</h4>\r\n                    </div>\r\n                    <p>You can both rotate and flip an icon. However, an element or a component can take ONLY one\r\n                        transformation.</p>\r\n                    <p>Therefore, you’ll need to use a container, such as a <code class=\"inline\">&lt;span&gt;</code>\r\n                        element, for\r\n                        additional transformation.</p>\r\n                    <p>Apply one rotate to the container and another on the nested icon.</p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <!-- A icon that's rotated 90 degrees and flipped horizontally -->\r\n                            <span class=\"fa-rotate-90\" style=\"display: inline-block;\">\r\n                                <fa prefix=\"fas\" name=\"snowboarding\" flip=\"horizontal\"></fa>\r\n                            </span>\r\n                            <!-- A icon that's flipped horizontally and rotated 90 degrees  -->\r\n                            <span class=\"fa-flip-horizontal\" style=\"display: inline-block;\">\r\n                                <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"90\"></fa>\r\n                            </span>\r\n                            <!-- A icon that's flipped vertically and rotated 270 degrees  -->\r\n                            <span class=\"fa-flip-vertical\" style=\"display: inline-block;\">\r\n                                <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"270\"></fa>\r\n                            </span>\r\n                            <!-- A icon that's rotated 270 degrees and flipped vertically -->\r\n                            <span class=\"fa-rotate-270\" style=\"display: inline-block;\">\r\n                                <fa prefix=\"fas\" name=\"snowboarding\" flip=\"vertical\"></fa>\r\n                            </span>\r\n                            <!-- A icon that's flipped on both axes and arbitrarily rotated 45 degrees  -->\r\n                            <span class=\"fa-flip-both\" style=\"display: inline-block;\">\r\n                                <fa prefix=\"fas\" name=\"snowboarding\" rotateBy=\"45\"></fa>\r\n                            </span>\r\n                            <!-- A icon that's arbitrarily rotated 45 degrees and flipped on both axes  -->\r\n                            <span class=\"fa-rotate-by\" style=\"display: inline-block; --fa-rotate-angle: 45deg;\">\r\n                                <fa prefix=\"fas\" name=\"snowboarding\" flip=\"both\"></fa>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-rotation-flip-1\" name=\"tab-group-rotation-flip\" class=\"tab\">\r\n                        <label for=\"tab-rotation-flip-1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-rotation-flip-2\" name=\"tab-group-rotation-flip\" class=\"tab\" checked>\r\n                        <label for=\"tab-rotation-flip-2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n  <!-- A icon that's rotated 90 degrees and flipped horizontally -->\r\n  <span class=\"fa-rotate-90\" style=\"display: inline-block;\">\r\n    <i class=\"fas fa-snowboarding fa-flip-horizontal\"></i>\r\n  </span>\r\n  <!-- A icon that's flipped horizontally and rotated 90 degrees  -->\r\n  <span class=\"fa-flip-horizontal\" style=\"display: inline-block;\">\r\n    <i class=\"fas fa-snowboarding fa-rotate-90\"></i>\r\n  </span>\r\n  <!-- A icon that's flipped vertically and rotated 270 degrees  -->\r\n  <span class=\"fa-flip-vertical\" style=\"display: inline-block;\">\r\n    <i class=\"fas fa-snowboarding fa-rotate-270\"></i>\r\n  </span>\r\n  <!-- A icon that's rotated 270 degrees and flipped vertically -->\r\n  <span class=\"fa-rotate-270\" style=\"display: inline-block;\">\r\n    <i class=\"fas fa-snowboarding fa-flip-vertical\"></i>\r\n  </span>\r\n  <!-- A icon that's flipped on both axes and arbitrarily rotated 45 degrees  -->\r\n  <span class=\"fa-flip-both\" style=\"display: inline-block;\">\r\n    <i class=\"fas fa-snowboarding fa-rotate-by\" style=\"--fa-rotate-angle: 45deg;\"></i>\r\n  </span>\r\n  <!-- A icon that's arbitrarily rotated 45 degrees and flipped on both axes  -->\r\n  <span class=\"fa-rotate-by\" style=\"display: inline-block; --fa-rotate-angle: 45deg;\">\r\n    <i class=\"fas fa-snowboarding fa-flip-both\"></i>\r\n  </span>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <!-- A icon that's rotated 90 degrees and flipped horizontally -->\r\n    <span class=\"fa-rotate-90\" style=\"display: inline-block;\">\r\n        <fa prefix=\"fas\" name=\"snowboarding\" flip=\"horizontal\"></fa>\r\n    </span>\r\n    <!-- A icon that's flipped horizontally and rotated 90 degrees  -->\r\n    <span class=\"fa-flip-horizontal\" style=\"display: inline-block;\">\r\n        <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"90\"></fa>\r\n    </span>\r\n    <!-- A icon that's flipped vertically and rotated 270 degrees  -->\r\n    <span class=\"fa-flip-vertical\" style=\"display: inline-block;\">\r\n        <fa prefix=\"fas\" name=\"snowboarding\" rotate=\"270\"></fa>\r\n    </span>\r\n    <!-- A icon that's rotated 270 degrees and flipped vertically -->\r\n    <span class=\"fa-rotate-270\" style=\"display: inline-block;\">\r\n        <fa prefix=\"fas\" name=\"snowboarding\" flip=\"vertical\"></fa>\r\n    </span>\r\n    <!-- A icon that's flipped on both axes and arbitrarily rotated 45 degrees  -->\r\n    <span class=\"fa-flip-both\" style=\"display: inline-block;\">\r\n        <fa prefix=\"fas\" name=\"snowboarding\" rotateBy=\"45\"></fa>\r\n    </span>\r\n    <!-- A icon that's arbitrarily rotated 45 degrees and flipped on both axes  -->\r\n    <span class=\"fa-rotate-by\" style=\"display: inline-block; --fa-rotate-angle: 45deg;\">\r\n        <fa prefix=\"fas\" name=\"snowboarding\" flip=\"both\"></fa>\r\n    </span>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- ANIMATING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Animating Icons</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/animating-icons\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-3x\">\r\n                            <fa prefix=\"fas\" name=\"spinner\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n                            <fa prefix=\"fas\" name=\"circle-notch\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n                            <fa prefix=\"fas\" name=\"sync\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n                            <fa prefix=\"fas\" name=\"cog\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n                            <fa prefix=\"fas\" name=\"spinner\" animation=\"pulse\" title=\"pulse animation\"></fa>\r\n                            <fa prefix=\"fas\" name=\"stroopwafel\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-animation-1\" name=\"tab-group-animation\" class=\"tab\">\r\n                        <label for=\"tab-animation-1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-animation-2\" name=\"tab-group-animation\" class=\"tab\" checked>\r\n                        <label for=\"tab-animation-2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-3x\">\r\n  <i class=\"fas fa-spinner fa-spin\"></i>\r\n  <i class=\"fas fa-circle-notch fa-spin\"></i>\r\n  <i class=\"fas fa-sync fa-spin\"></i>\r\n  <i class=\"fas fa-cog fa-spin\"></i>\r\n  <i class=\"fas fa-spinner fa-pulse\"></i>\r\n  <i class=\"fas fa-stroopwafel fa-spin\"></i>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-3x\">\r\n    <fa prefix=\"fas\" name=\"spinner\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n    <fa prefix=\"fas\" name=\"circle-notch\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n    <fa prefix=\"fas\" name=\"sync\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n    <fa prefix=\"fas\" name=\"cog\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n    <fa prefix=\"fas\" name=\"spinner\" animation=\"pulse\" title=\"pulse animation\"></fa>\r\n    <fa prefix=\"fas\" name=\"stroopwafel\" animation=\"spin\" title=\"spinning animation\"></fa>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"docs-generated table-wrap\">\r\n                        <table>\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"align-left\">FA Class</th>\r\n                                <th class=\"align-left\"><code class=\"inline\">&lt;fa&gt;</code> attribute</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-spin</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">animation=\"spin\"</code></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-pulse</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">animation=\"pulse\"</code></td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <!-- BORDERED & PULLED -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Bordered + Pulled Icons</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/bordered-pulled-icons\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <p>Set attribute <code class=\"inline\">pull=\"left\"</code> or <code class=\"inline\">pull=\"right\"</code>\r\n                        to pull /\r\n                        align the icon to the left or right.</p>\r\n                    <div class=\"show-off\">\r\n                        <fa prefix=\"fas\" name=\"quote-left\" scale=\"2\" pull=\"left\"></fa>\r\n                        Gatsby believed in the green light, the orgastic future that year by year recedes before us.\r\n                        It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms\r\n                        further...\r\n                        And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the\r\n                        past.\r\n                        <fa prefix=\"fas\" name=\"quote-right\" scale=\"2\" pull=\"right\"></fa>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-pulled-1\" name=\"tab-group-pulled\" class=\"tab\">\r\n                        <label for=\"tab-pulled-1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-pulled-2\" name=\"tab-group-pulled\" class=\"tab\" checked>\r\n                        <label for=\"tab-pulled-2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<i class=\"fas fa-quote-left fa-2x fa-pull-left\"></i>\r\nGatsby believed in the green light, the orgastic future that year by year recedes before us.\r\nIt eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...\r\nAnd one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.\r\n<i class=\"fas fa-quote-right fa-2x fa-pull-right\"></i>\r\n                    </textarea>\r\n                        </div>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<fa prefix=\"fas\" name=\"quote-left\" scale=\"2\" pull=\"left\"></fa>\r\nGatsby believed in the green light, the orgastic future that year by year recedes before us.\r\nIt eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...\r\nAnd one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.\r\n<fa prefix=\"fas\" name=\"quote-right\" scale=\"2\" pull=\"right\"></fa>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <p>Set attribute <code class=\"inline\">border=\"true\"</code> to add border to the icon.</p>\r\n                    <div class=\"show-off\">\r\n                        <fa prefix=\"fas\" name=\"arrow-right\" scale=\"3\" pull=\"right\" border=\"true\"></fa>\r\n                        Gatsby believed in the green light, the orgastic future that year by year recedes before us.\r\n                        It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms\r\n                        further...\r\n                        And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the\r\n                        past.\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-bordered-1\" name=\"tab-group-bordered\" class=\"tab\">\r\n                        <label for=\"tab-bordered-1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-bordered-2\" name=\"tab-group-bordered\" class=\"tab\" checked>\r\n                        <label for=\"tab-bordered-2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<i class=\"fas fa-arrow-right fa-2x fa-pull-right fa-border\"></i>\r\nGatsby believed in the green light, the orgastic future that year by year recedes before us.\r\nIt eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...\r\nAnd one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.\r\n                    </textarea>\r\n                        </div>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<fa prefix=\"fas\" name=\"arrow-right\" scale=\"3\" pull=\"right\" border=\"true\"></fa>\r\nGatsby believed in the green light, the orgastic future that year by year recedes before us.\r\nIt eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...\r\nAnd one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.                    </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"docs-generated table-wrap\">\r\n                        <table>\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"align-left\">FA Class</th>\r\n                                <th class=\"align-left\"><code class=\"inline\">&lt;fa&gt;</code> attribute</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-pull-left</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">pull=\"left\"</code></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-pull-right</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">pull=\"right\"</code></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"align-left\"><code class=\"inline\">fa-border</code></td>\r\n                                <td class=\"align-left\"><code class=\"inline\">border=\"true\"</code></td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <!-- STACKING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Stacking Icons</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/stacking-icons\"\r\n                           target=\"_blank\" style=\"display: inline-block\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <p><b>NOTE: </b>Stacking ONLY supports up to 2 icons. To stack more than 2 icons, use SVG icons.</p>\r\n                    <p>To stack icons, first, set the <code class=\"inline\">fa-stack</code> class on the container\r\n                        element.</p>\r\n                    <p>Then set the attribute <code class=\"inline\">stack=\"1\"</code> for the small icon component</p>\r\n                    <p>Finally, set the attribute <code class=\"inline\">stack=\"2\"</code> for the large icon component.\r\n                    </p>\r\n                    <p>When stacking 2 solid icons, the small icon will NOT be visible.\r\n                        Set the attribute <code class=\"inline\">inverse=\"true\"</code> of the small icon to make it\r\n                        standout from the\r\n                        stack.</p>\r\n                    <p>The size of the stack can be adjusted by setting the size of the container element.</p>\r\n                    <p>The order of the icons in the container reflects the order of stack.</p>\r\n\r\n                    <div class=\"show-off\">\r\n                        <span class=\"fa-stack fa-2x\">\r\n                            <fa prefix=\"fas\" name=\"square\" stack=\"2\"></fa>\r\n                            <fa prefix=\"fab\" name=\"twitter\" stack=\"1\" inverse=\"true\"></fa>\r\n                        </span>\r\n                        <span class=\"fa-stack fa-2x\">\r\n                            <fa prefix=\"fas\" name=\"circle\" stack=\"2\"></fa>\r\n                            <fa prefix=\"fas\" name=\"flag\" stack=\"1\" inverse=\"true\"></fa>\r\n                        </span>\r\n                        <span class=\"fa-stack fa-2x\">\r\n                            <fa prefix=\"fas\" name=\"square\" stack=\"2\"></fa>\r\n                            <fa prefix=\"fas\" name=\"terminal\" stack=\"1\" inverse=\"true\"></fa>\r\n                        </span>\r\n                        <span class=\"fa-stack fa-4x\">\r\n                            <fa prefix=\"fas\" name=\"square\" stack=\"2\"></fa>\r\n                            <fa prefix=\"fas\" name=\"terminal\" stack=\"1\" inverse=\"true\"></fa>\r\n                        </span>\r\n                        <span class=\"fa-stack fa-2x\">\r\n                            <fa prefix=\"fas\" name=\"camera\" stack=\"1\"></fa>\r\n                            <fa prefix=\"fas\" name=\"ban\" stack=\"2\" cssClass=\"tomato-red\"></fa>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-stacked-1\" name=\"tab-group-stacked\" class=\"tab\">\r\n                        <label for=\"tab-stacked-1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-stacked-2\" name=\"tab-group-stacked\" class=\"tab\" checked>\r\n                        <label for=\"tab-stacked-2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<span class=\"fa-stack fa-2x\">\r\n  <i class=\"fas fa-square fa-stack-2x\"></i>\r\n  <i class=\"fab fa-twitter fa-stack-1x fa-inverse\"></i>\r\n</span>\r\n<span class=\"fa-stack fa-2x\">\r\n  <i class=\"fas fa-circle fa-stack-2x\"></i>\r\n  <i class=\"fas fa-flag fa-stack-1x fa-inverse\"></i>\r\n</span>\r\n<span class=\"fa-stack fa-2x\">\r\n  <i class=\"fas fa-square fa-stack-2x\"></i>\r\n  <i class=\"fas fa-terminal fa-stack-1x fa-inverse\"></i>\r\n</span>\r\n<span class=\"fa-stack fa-4x\">\r\n  <i class=\"fas fa-square fa-stack-2x\"></i>\r\n  <i class=\"fas fa-terminal fa-stack-1x fa-inverse\"></i>\r\n</span>\r\n<span class=\"fa-stack fa-2x\">\r\n  <i class=\"fas fa-camera fa-stack-1x\"></i>\r\n  <i class=\"fas fa-ban fa-stack-2x\" style=\"color:Tomato\"></i>\r\n</span>\r\n                    </textarea>\r\n                        </div>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.tomato-red {\r\n    color: Tomato !important;\r\n}\r\n                    </textarea>\r\n                            <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<span class=\"fa-stack fa-2x\">\r\n  <fa prefix=\"fas\" name=\"square\" stack=\"2\"></fa>\r\n  <fa prefix=\"fab\" name=\"twitter\" stack=\"1\" inverse=\"true\"></fa>\r\n</span>\r\n<span class=\"fa-stack fa-2x\">\r\n  <fa prefix=\"fas\" name=\"circle\" stack=\"2\"></fa>\r\n  <fa prefix=\"fas\" name=\"flag\" stack=\"1\" inverse=\"true\"></fa>\r\n</span>\r\n<span class=\"fa-stack fa-2x\">\r\n  <fa prefix=\"fas\" name=\"square\" stack=\"2\"></fa>\r\n  <fa prefix=\"fas\" name=\"terminal\" stack=\"1\" inverse=\"true\"></fa>\r\n</span>\r\n<span class=\"fa-stack fa-4x\">\r\n  <fa prefix=\"fas\" name=\"square\" stack=\"2\"></fa>\r\n  <fa prefix=\"fas\" name=\"terminal\" stack=\"1\" inverse=\"true\"></fa>\r\n</span>\r\n<span class=\"fa-stack fa-2x\">\r\n  <fa prefix=\"fas\" name=\"camera\" stack=\"1\"></fa>\r\n  <fa prefix=\"fas\" name=\"ban\" stack=\"2\" cssClass=\"tomato-red\"></fa>\r\n</span>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- STACKING REGULAR ICONS -->\r\n                    <div class=\"demo-section\">\r\n                        <h4>Aligning Stacked and Regular Icons</h4>\r\n                    </div>\r\n                    <p>You can use stacked icons right alongside single icons.\r\n                        Since stacked icons are styled by our framework’s included CSS to be twice the size of single\r\n                        icons,\r\n                        you’ll need to either size down the stacked icon or size up the single icons.</p>\r\n                    <div class=\"show-off\">\r\n                        <fa prefix=\"far\" name=\"circle\" scale=\"2\"></fa>\r\n                        <span class=\"fa-stack\" style=\"vertical-align: top;\">\r\n                            <fa prefix=\"far\" name=\"circle\" stack=\"2\"></fa>\r\n                            <fa prefix=\"fas\" name=\"flag\" stack=\"1\"></fa>\r\n                        </span>\r\n                        <span class=\"fa-stack\" style=\"vertical-align: top;\">\r\n                            <fa prefix=\"fas\" name=\"circle\" stack=\"2\"></fa>\r\n                            <fa prefix=\"fas\" name=\"flag\" stack=\"1\" inverse=\"true\"></fa>\r\n                        </span>\r\n                        <fa prefix=\"far\" name=\"circle\" scale=\"2\"></fa>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-stacked-regular-1\" name=\"tab-group-stacked-regular\" class=\"tab\">\r\n                        <label for=\"tab-stacked-regular-1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-stacked-regular-2\" name=\"tab-group-stacked-regular\" class=\"tab\"\r\n                               checked>\r\n                        <label for=\"tab-stacked-regular-2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<i class=\"far fa-circle fa-2x\"></i>\r\n<span class=\"fa-stack\" style=\"vertical-align: top;\">\r\n  <i class=\"far fa-circle fa-stack-2x\"></i>\r\n  <i class=\"fas fa-flag fa-stack-1x\"></i>\r\n</span>\r\n<span class=\"fa-stack\" style=\"vertical-align: top;\">\r\n  <i class=\"fas fa-circle fa-stack-2x\"></i>\r\n  <i class=\"fas fa-flag fa-stack-1x fa-inverse\"></i>\r\n</span>\r\n<i class=\"far fa-circle fa-2x\"></i>\r\n                    </textarea>\r\n                        </div>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<fa prefix=\"far\" name=\"circle\" scale=\"2\"></fa>\r\n<span class=\"fa-stack\" style=\"vertical-align: top;\">\r\n  <fa prefix=\"far\" name=\"circle\" stack=\"2\"></fa>\r\n  <fa prefix=\"fas\" name=\"flag\" stack=\"1\"></fa>\r\n</span>\r\n<span class=\"fa-stack\" style=\"vertical-align: top;\">\r\n  <fa prefix=\"fas\" name=\"circle\" stack=\"2\"></fa>\r\n  <fa prefix=\"fas\" name=\"flag\" stack=\"1\" inverse=\"true\"></fa>\r\n</span>\r\n<fa prefix=\"far\" name=\"circle\" scale=\"2\"></fa>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <!-- SVG -->\r\n                <div class=\"tab__content\">\r\n                    <div class=\"demo-section\">\r\n                        <h3>Power Transforms</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/power-transforms\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <!-- SCALING -->\r\n                    <div class=\"demo-section\">\r\n                        <h4>Scaling</h4>\r\n                    </div>\r\n                    <p>For sizing and scaling SVG icons, set the attribute<code class=\"inline\">grow</code> or <code\r\n                        class=\"inline\">shrink</code>\r\n                        to increase or decrease the size of icons.</p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" grow=\"6\" cssClass=\"rose-background\"></fa-svg>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <!-- active tab on page load gets checked attribute -->\r\n                        <input type=\"radio\" id=\"tab-svg-positioning1\" name=\"tab-group-svg-positioning\" class=\"tab\">\r\n                        <label for=\"tab-svg-positioning1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-svg-positioning2\" name=\"tab-group-svg-positioning\" class=\"tab\"\r\n                               checked>\r\n                        <label for=\"tab-svg-positioning2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"shrink-8\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"grow-6\" style=\"background:MistyRose\"></i>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.rose-background {\r\n    background: MistyRose;\r\n}\r\n                    </textarea>\r\n                            <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" grow=\"6\" cssClass=\"rose-background\"></fa-svg>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- POSITIONING -->\r\n                    <div class=\"demo-section\">\r\n                        <h4>Positioning</h4>\r\n                    </div>\r\n                    <p>To move icons up, down, left, or right, set the attribute <code class=\"inline\">up</code>,\r\n                        <code class=\"inline\">down</code>, <code class=\"inline\">left</code>, and <code class=\"inline\">right</code>\r\n                        respectively with any arbitrary value, including decimals.\r\n                    </p>\r\n                    <p><b>Note: </b>Units are 1/16em.</p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" up=\"6\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" right=\"6\"\r\n                                    cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" down=\"6\"\r\n                                    cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" left=\"6\"\r\n                                    cssClass=\"rose-background\"></fa-svg>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-svg-scaling1\" name=\"tab-group-svg-scaling\" class=\"tab\">\r\n                        <label for=\"tab-svg-scaling1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-svg-scaling2\" name=\"tab-group-svg-scaling\" class=\"tab\" checked>\r\n                        <label for=\"tab-svg-scaling2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"shrink-8\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"shrink-8 up-6\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"shrink-8 right-6\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"shrink-8 down-6\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"shrink-8 left-6\" style=\"background:MistyRose\"></i>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.rose-background {\r\n    background: MistyRose;\r\n}\r\n                    </textarea>\r\n                            <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" up=\"6\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" right=\"6\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" down=\"6\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" shrink=\"8\" left=\"6\" cssClass=\"rose-background\"></fa-svg>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- ROTATING -->\r\n                    <div class=\"demo-section\">\r\n                        <h4>Rotating & Flipping</h4>\r\n                    </div>\r\n                    <p>To rotate or flip icons, use any combination of <code class=\"inline\">flip</code> and <code\r\n                        class=\"inline\">rotate</code>\r\n                        attributes.</p>\r\n                    <p>Attribute <code class=\"inline\">flip</code>takes the following values<code class=\"inline\">horizontal</code>,\r\n                        <code class=\"inline\">vertical</code> or <code class=\"inline\">both</code></p>\r\n                    <p>Attribute <code class=\"inline\">rotate</code>takes any arbitrary value (in degree), including\r\n                        decimals and\r\n                        negative values.</p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"90\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"180\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"270\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"30\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"-30\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" flip=\"vertical\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" flip=\"horizontal\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"seedling\" flip=\"both\" cssClass=\"rose-background\"></fa-svg>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-svg-rotating1\" name=\"tab-group-svg-rotating\" class=\"tab\">\r\n                        <label for=\"tab-svg-rotating1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-svg-rotating2\" name=\"tab-group-svg-rotating\" class=\"tab\" checked>\r\n                        <label for=\"tab-svg-rotating2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"rotate-90\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"rotate-180\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"rotate-270\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"rotate-30\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"rotate--30\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"flip-v\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"flip-h\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-seedling\" data-fa-transform=\"flip-v flip-h\" style=\"background:MistyRose\"></i>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.rose-background {\r\n    background: MistyRose;\r\n}\r\n                    </textarea>\r\n                            <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"90\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"180\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"270\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"30\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" rotate=\"-30\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" flip=\"vertical\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" flip=\"horizontal\" cssClass=\"rose-background\"></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"seedling\" flip=\"both\" cssClass=\"rose-background\"></fa-svg>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- MASKING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Masking Icons</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/masking\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <p>Set the attribute<code class=\"inline\">maskPrefix</code>and<code class=\"inline\">maskName</code>\r\n                        to add a masking icon as a background of current icon.</p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <fa-svg prefix=\"fas\" name=\"pencil-alt\" shrink=\"10\" up=\".5\" maskPrefix=\"fas\"\r\n                                    maskName=\"comment\"\r\n                                    cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fab\" name=\"facebook-f\" shrink=\"3.5\" down=\"1.6\" right=\"1.25\" maskPrefix=\"fas\"\r\n                                    maskName=\"circle\" cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"headphones\" shrink=\"6\" maskPrefix=\"fas\" maskName=\"square\"\r\n                                    cssClass=\"rose-background\"></fa-svg>\r\n                            <fa-svg prefix=\"fas\" name=\"mask\" shrink=\"3\" up=\"1\" maskPrefix=\"fas\" maskName=\"circle\"\r\n                                    cssClass=\"rose-background\"></fa-svg>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-svg-masking1\" name=\"tab-group-svg-masking\" class=\"tab\">\r\n                        <label for=\"tab-svg-masking1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-svg-masking2\" name=\"tab-group-svg-masking\" class=\"tab\" checked>\r\n                        <label for=\"tab-svg-masking2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n  <i class=\"fas fa-pencil-alt\" data-fa-transform=\"shrink-10 up-.5\" data-fa-mask=\"fas fa-comment\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fab fa-facebook-f\" data-fa-transform=\"shrink-3.5 down-1.6 right-1.25\" data-fa-mask=\"fas fa-circle\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-headphones\" data-fa-transform=\"shrink-6\" data-fa-mask=\"fas fa-square\" style=\"background:MistyRose\"></i>\r\n  <i class=\"fas fa-mask\" data-fa-transform=\"shrink-3 up-1\" data-fa-mask=\"fas fa-circle\" style=\"background:MistyRose\"></i>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.rose-background {\r\n    background: MistyRose;\r\n}\r\n                    </textarea>\r\n                            <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <fa-svg prefix=\"fas\" name=\"pencil-alt\" shrink=\"10\" up=\".5\" maskPrefix=\"fas\" maskName=\"comment\" cssClass=\"rose-background\" ></fa-svg>\r\n    <fa-svg prefix=\"fab\" name=\"facebook-f\" shrink=\"3.5\" down=\"1.6\" right=\"1.25\" maskPrefix=\"fas\" maskName=\"circle\" cssClass=\"rose-background\" ></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"headphones\" shrink=\"6\" maskPrefix=\"fas\" maskName=\"square\" cssClass=\"rose-background\" ></fa-svg>\r\n    <fa-svg prefix=\"fas\" name=\"mask\" shrink=\"3\" up=\"1\" maskPrefix=\"fas\" maskName=\"circle\" cssClass=\"rose-background\" ></fa-svg>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- LAYERING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Layering, Text and Counters</h3>\r\n                        <a class=\"external-link\"\r\n                           href=\"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/layering\"\r\n                           target=\"_blank\">\r\n                            <fa prefix=\"fas\" name=\"external-link-alt\" size=\"xs\"></fa>\r\n                        </a>\r\n                    </div>\r\n                    <p>Similar to stacking WebFont icons, Layering is a new way to place SVG icons and text on top of\r\n                        each other.\r\n                        Moreover, layering supports more than 2 icons (a limitation of stacking WebFont icons)</p>\r\n                    <p><b>@ngx/fontawesome</b> provides<code class=\"inline\">[faLayersText]</code>directive, which is\r\n                        equivalent to\r\n                        FontAwesome <code class=\"inline\">fa-layers-text</code> CSS class.\r\n                        The directive also performs all the transformations such as translating, scaling, rotating with\r\n                        values\r\n                        provided in the following attributes.</p>\r\n                    <ul>\r\n                        <li><b>Translating: </b><code class=\"inline\">left</code>/<code class=\"inline\">right</code>/<code\r\n                            class=\"inline\">up</code>/<code class=\"inline\">down</code></li>\r\n                        <li><b>Scaling: </b><code class=\"inline\">shrink</code>/<code class=\"inline\">grow</code></li>\r\n                        <li><b>Rotating: </b><code class=\"inline\">rotate</code>/<code class=\"inline\">flip</code></li>\r\n                    </ul>\r\n                    <p><b>Note: </b>Units are 1/16em.</p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"circle\" cssClass=\"tomato-red\"></fa-svg>\r\n                                <fa-svg prefix=\"fas\" inverse=\"true\" name=\"times\" shrink=\"6\"></fa-svg>\r\n                            </span>\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"bookmark\"></fa-svg>\r\n                                <fa-svg prefix=\"fas\" inverse=\"true\" name=\"heart\" shrink=\"10\" up=\"2\"\r\n                                        cssClass=\"tomato-red\"></fa-svg>\r\n                            </span>\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"play\" rotate=\"-90\" grow=\"2\"></fa-svg>\r\n                                <fa-svg prefix=\"fas\" name=\"sun\" inverse=\"true\" shrink=\"10\" up=\"2\"></fa-svg>\r\n                                <fa-svg prefix=\"fas\" name=\"moon\" inverse=\"true\" shrink=\"11\" down=\"4.2\"\r\n                                        left=\"4\"></fa-svg>\r\n                                <fa-svg prefix=\"fas\" name=\"star\" inverse=\"true\" shrink=\"11\" down=\"4.2\"\r\n                                        right=\"4\"></fa-svg>\r\n                            </span>\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"calendar\"></fa-svg>\r\n                                <span faLayersText class=\"fa-inverse\" shrink=\"8\" down=\"3\"\r\n                                      style=\"font-weight:900\">27</span>\r\n                            </span>\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"certificate\"></fa-svg>\r\n                                <span faLayersText class=\"fa-inverse\" shrink=\"11.5\" rotate=\"-30\"\r\n                                      style=\"font-weight:900\">NEW</span>\r\n                            </span>\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"envelope\"></fa-svg>\r\n                                <span class=\"fa-layers-counter\" style=\"background:Tomato\">1,419</span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-wrap\">\r\n                        <input type=\"radio\" id=\"tab-svg-layering1\" name=\"tab-group-svg-layering\" class=\"tab\">\r\n                        <label for=\"tab-svg-layering1\">Font Awesome</label>\r\n\r\n                        <input type=\"radio\" id=\"tab-svg-layering2\" name=\"tab-group-svg-layering\" class=\"tab\" checked>\r\n                        <label for=\"tab-svg-layering2\">Angular</label>\r\n\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n  <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n    <i class=\"fas fa-circle\" style=\"color:Tomato\"></i>\r\n    <i class=\"fa-inverse fas fa-times\" data-fa-transform=\"shrink-6\"></i>\r\n  </span>\r\n\r\n  <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n    <i class=\"fas fa-bookmark\"></i>\r\n    <i class=\"fa-inverse fas fa-heart\" data-fa-transform=\"shrink-10 up-2\" style=\"color:Tomato\"></i>\r\n  </span>\r\n\r\n  <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n    <i class=\"fas fa-play\" data-fa-transform=\"rotate--90 grow-2\"></i>\r\n    <i class=\"fas fa-sun fa-inverse\" data-fa-transform=\"shrink-10 up-2\"></i>\r\n    <i class=\"fas fa-moon fa-inverse\" data-fa-transform=\"shrink-11 down-4.2 left-4\"></i>\r\n    <i class=\"fas fa-star fa-inverse\" data-fa-transform=\"shrink-11 down-4.2 right-4\"></i>\r\n  </span>\r\n\r\n  <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n    <i class=\"fas fa-calendar\"></i>\r\n    <span class=\"fa-layers-text fa-inverse\" data-fa-transform=\"shrink-8 down-3\" style=\"font-weight:900\">27</span>\r\n  </span>\r\n\r\n  <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n    <i class=\"fas fa-certificate\"></i>\r\n    <span class=\"fa-layers-text fa-inverse\" data-fa-transform=\"shrink-11.5 rotate--30\" style=\"font-weight:900\">NEW</span>\r\n  </span>\r\n\r\n  <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n    <i class=\"fas fa-envelope\"></i>\r\n    <span class=\"fa-layers-counter\" style=\"background:Tomato\">1,419</span>\r\n  </span>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                        <div class=\"tab__content\">\r\n                    <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.tomato-red {\r\n  color: Tomato !important;\r\n}\r\n                    </textarea>\r\n                            <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"circle\" cssClass=\"tomato-red\"></fa-svg>\r\n        <fa-svg prefix=\"fas\" inverse=\"true\" name=\"times\" shrink=\"6\"></fa-svg>\r\n    </span>\r\n\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"bookmark\"></fa-svg>\r\n        <fa-svg prefix=\"fas\" inverse=\"true\" name=\"heart\" shrink=\"10\" up=\"2\" cssClass=\"tomato-red\"></fa-svg>\r\n    </span>\r\n\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"play\" rotate=\"-90\" grow=\"2\"></fa-svg>\r\n        <fa-svg prefix=\"fas\" name=\"sun\" inverse=\"true\" shrink=\"10\" up=\"2\"></fa-svg>\r\n        <fa-svg prefix=\"fas\" name=\"moon\" inverse=\"true\" shrink=\"11\" down=\"4.2\" left=\"4\"></fa-svg>\r\n        <fa-svg prefix=\"fas\" name=\"star\" inverse=\"true\" shrink=\"11\" down=\"4.2\" right=\"4\"></fa-svg>\r\n    </span>\r\n\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"calendar\"></fa-svg>\r\n        <span faLayersText class=\"fa-inverse\" shrink=\"8\" down=\"3\" style=\"font-weight:900\">27</span>\r\n    </span>\r\n\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"certificate\"></fa-svg>\r\n        <span faLayersText class=\"fa-inverse\" shrink=\"11.5\" rotate=\"-30\" style=\"font-weight:900\">NEW</span>\r\n    </span>\r\n\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"envelope\"></fa-svg>\r\n        <span class=\"fa-layers-counter\" style=\"background:Tomato\">1,419</span>\r\n    </span>\r\n</div>\r\n                    </textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- ANIMATING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Animating Icons</h3>\r\n                    </div>\r\n                    <p>Similar to animating WebFont icons, animating SVG icons can be done in the same way by setting\r\n                        the\r\n                        attribute <code class=\"inline\">animate=\"spin\"</code> or <code\r\n                            class=\"inline\">animate=\"pulse\"</code></p>\r\n                    <div class=\"show-off\">\r\n                        <div class=\"fa-4x\">\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"circle\" cssClass=\"tomato-red\"></fa-svg>\r\n                                <fa-svg prefix=\"fas\" inverse=\"true\" name=\"times\" shrink=\"6\" animation=\"spin\"></fa-svg>\r\n                            </span>\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"spinner\" animation=\"pulse\"></fa-svg>\r\n                                <fa-svg prefix=\"fas\" name=\"heart\" inverse=\"true\" shrink=\"8\"\r\n                                        cssClass=\"tomato-red\"></fa-svg>\r\n                            </span>\r\n                            <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n                                <fa-svg prefix=\"fas\" name=\"certificate\" animation=\"spin\"></fa-svg>\r\n                                <span faLayersText class=\"fa-inverse\" shrink=\"11.5\" rotate=\"-30\"\r\n                                      style=\"font-weight:900\">NEW</span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                <textarea highlight-js lang=\"css\" mode=\"default\">\r\n.tomato-red {\r\n  color: Tomato !important;\r\n}\r\n                    </textarea>\r\n                        <textarea highlight-js lang=\"html\" mode=\"default\">\r\n<div class=\"fa-4x\">\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"circle\" cssClass=\"tomato-red\"></fa-svg>\r\n        <fa-svg prefix=\"fas\" inverse=\"true\" name=\"times\" shrink=\"6\" animation=\"spin\"></fa-svg>\r\n    </span>\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"spinner\" animation=\"pulse\"></fa-svg>\r\n        <fa-svg prefix=\"fas\" name=\"heart\" inverse=\"true\" shrink=\"8\" cssClass=\"tomato-red\"></fa-svg>\r\n    </span>\r\n    <span class=\"fa-layers fa-fw\" style=\"background:MistyRose\">\r\n        <fa-svg prefix=\"fas\" name=\"certificate\" animation=\"spin\"></fa-svg>\r\n        <span faLayersText class=\"fa-inverse\" shrink=\"11.5\" rotate=\"-30\" style=\"font-weight:900\">NEW</span>\r\n    </span>\r\n</div>\r\n                    </textarea>\r\n                    </div>\r\n                    <!-- ANGULAR ATTRIBUTES BINDING -->\r\n                    <div class=\"demo-section\">\r\n                        <h3>Attribute Binding</h3>\r\n                    </div>\r\n                    <p>Attribute values of FontAwesome icon can be dynamically set or updated via Angular bindings.<br/>\r\n                        Click on the icons bellow to change their attribute value.</p>\r\n                    <div class=\"show-off demo-group\">\r\n                        <div class=\"demo-item\">\r\n                            <label>[grow]</label>\r\n                            <label>{{growValue}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [grow]=\"growValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [grow] attribute\" (click)=\"updateGrowValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[shrink]</label>\r\n                            <label>{{shrinkValue}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [shrink]=\"shrinkValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [shrink] attribute\"\r\n                                        (click)=\"updateShrinkValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[up]</label>\r\n                            <label>{{upValue}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [up]=\"upValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [up] attribute\" (click)=\"updateUpValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[down]</label>\r\n                            <label>{{downValue}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [down]=\"downValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [down] attribute\" (click)=\"updateDownValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[left]</label>\r\n                            <label>{{leftValue}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [left]=\"leftValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [left] attribute\" (click)=\"updateLeftValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[right]</label>\r\n                            <label>{{rightValue}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [right]=\"rightValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [right] attribute\" (click)=\"updateRightValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[rotate]</label>\r\n                            <label>{{rotateValue}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [rotate]=\"rotateValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [rotate] attribute\" (click)=\"updateRotateValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[flip]</label>\r\n                            <label>{{flipValue || 'null'}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"seedling\" [flip]=\"flipValue\" cssClass=\"rose-background\"\r\n                                        title=\"click to change [flip] attribute\" (click)=\"updateFlipValue()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[animation]</label>\r\n                            <label>{{pulseAnimation || 'null'}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"spinner\" [animation]=\"pulseAnimation\"\r\n                                        title=\"click to change [animation] attribute\" (click)=\"updatePulse()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"demo-item\">\r\n                            <label>[animation]</label>\r\n                            <label>{{spinAnimation || 'null'}}</label>\r\n                            <span class=\"fa-4x\">\r\n                                <fa-svg prefix=\"fas\" name=\"stroopwafel\" [animation]=\"spinAnimation\"\r\n                                        title=\"click to change [animation] attribute\" (click)=\"updateSpin()\"></fa-svg>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rose-background {\n  background: MistyRose; }\n\n.tomato-red {\n  color: Tomato !important; }\n\n.lightblue-background {\n  background: SkyBlue; }\n\n.darkblue-background {\n  background: DodgerBlue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.pulseIndex = 0;
        this.spinIndex = 0;
        this.growIndex = 0;
        this.shrinkIndex = 0;
        this.upIndex = 0;
        this.downIndex = 0;
        this.leftIndex = 0;
        this.rightIndex = 0;
        this.rotateIndex = 0;
        this.flipIndex = 0;
        this.spinAnimationValues = ['spin', null];
        this.pulseAnimationValues = ['pulse', null];
        this.translationValues = [2, 4, 6, 8, 10, 0];
        this.rotationValues = [45, 90, 135, 180, 225, 270, 315, 0];
        this.flippingValues = ['horizontal', 'vertical', 'both', null];
        this.pulseAnimation = this.pulseAnimationValues[this.pulseIndex];
        this.spinAnimation = this.spinAnimationValues[this.spinIndex];
        this.growValue = this.translationValues[this.growIndex];
        this.shrinkValue = this.translationValues[this.shrinkIndex];
        this.upValue = this.translationValues[this.upIndex];
        this.downValue = this.translationValues[this.downIndex];
        this.leftValue = this.translationValues[this.leftIndex];
        this.rightValue = this.translationValues[this.rightIndex];
        this.rotateValue = this.rotationValues[this.rotateIndex];
        this.flipValue = this.flippingValues[this.flipIndex];
    }
    // SCALING
    AppComponent.prototype.updateGrowValue = function () {
        this.growIndex = (this.growIndex + 1) % this.translationValues.length;
        this.growValue = this.translationValues[this.growIndex];
    };
    AppComponent.prototype.updateShrinkValue = function () {
        this.shrinkIndex = (this.shrinkIndex + 1) % this.translationValues.length;
        this.shrinkValue = this.translationValues[this.shrinkIndex];
    };
    /// TRANSLATION
    AppComponent.prototype.updateUpValue = function () {
        this.upIndex = (this.upIndex + 1) % this.translationValues.length;
        this.upValue = this.translationValues[this.upIndex];
    };
    AppComponent.prototype.updateDownValue = function () {
        this.downIndex = (this.downIndex + 1) % this.translationValues.length;
        this.downValue = this.translationValues[this.downIndex];
    };
    AppComponent.prototype.updateLeftValue = function () {
        this.leftIndex = (this.leftIndex + 1) % this.translationValues.length;
        this.leftValue = this.translationValues[this.leftIndex];
    };
    AppComponent.prototype.updateRightValue = function () {
        this.rightIndex = (this.rightIndex + 1) % this.translationValues.length;
        this.rightValue = this.translationValues[this.rightIndex];
    };
    /// ROTATION
    AppComponent.prototype.updateRotateValue = function () {
        this.rotateIndex = (this.rotateIndex + 1) % this.rotationValues.length;
        this.rotateValue = this.rotationValues[this.rotateIndex];
    };
    AppComponent.prototype.updateFlipValue = function () {
        this.flipIndex = (this.flipIndex + 1) % this.flippingValues.length;
        this.flipValue = this.flippingValues[this.flipIndex];
    };
    /// ANIMATION
    AppComponent.prototype.updatePulse = function () {
        this.pulseIndex = (this.pulseIndex + 1) % this.pulseAnimationValues.length;
        this.pulseAnimation = this.pulseAnimationValues[this.pulseIndex];
    };
    AppComponent.prototype.updateSpin = function () {
        this.spinIndex = (this.spinIndex + 1) % this.spinAnimationValues.length;
        this.spinAnimation = this.spinAnimationValues[this.spinIndex];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo-app',
            template: __webpack_require__("../../../../../example/app/app.component.html"),
            styles: [__webpack_require__("../../../../../example/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_highlight_js__ = __webpack_require__("../../../../ngx-highlight-js/fesm5/ngx-highlight-js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ngx_fontawesome_module__ = __webpack_require__("../../../../../src/ngx-fontawesome.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons__ = __webpack_require__("../../../../@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_free_regular_svg_icons__ = __webpack_require__("../../../../@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_free_brands_svg_icons__ = __webpack_require__("../../../../@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_highlight_js__["a" /* HighlightJsModule */],
                __WEBPACK_IMPORTED_MODULE_3__src_ngx_fontawesome_module__["a" /* NgxFontAwesomeModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            providers: [
                { provide: 'fab', useValue: __WEBPACK_IMPORTED_MODULE_7__fortawesome_free_brands_svg_icons__["a" /* fab */] },
                { provide: 'far', useValue: __WEBPACK_IMPORTED_MODULE_6__fortawesome_free_regular_svg_icons__["a" /* far */] },
                { provide: 'fas', useValue: __WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons__["a" /* fas */] },
                { provide: 'ngxFontAwesome', useValue: { svgSupport: true, prefix: ['far', 'fas', 'fab'] } }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("../../../../../config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/component/icons/fontawesome-svg.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"svgSymbol\">\r\n    <svg class=\"ngx-icon\" *ngIf=\"!inlineSvg\"\r\n         [ngClass]=\"classList\"\r\n         [attr.data-icon]=\"name\"\r\n         [attr.data-prefix]=\"prefix\"\r\n         [attr.aria-labelledby]=\"title ? componentId + '-title' : null\">\r\n        <title [attr.id]=\"componentId + '-title'\" *ngIf=\"title\" [innerHTML]=\"title\"></title>\r\n        <use [attr.xlink:href]=\"'#' + svgSymbol?.id\"></use>\r\n    </svg>\r\n    <svg role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"inlineSvg\"\r\n         [ngClass]=\"classList\"\r\n         [attr.data-icon]=\"name\"\r\n         [attr.data-prefix]=\"prefix\"\r\n         [attr.aria-labelledby]=\"title ? componentId + '-title' : null\"\r\n         [style.transformOrigin]=\"useMask ? null : symbolTransform\"\r\n         [attr.viewBox]=\"'0 0 ' + (useMask && !!maskSymbol ? (maskSymbol?.width + ' ' + maskSymbol?.height) : (svgSymbol?.width + ' ' + svgSymbol?.height))\">\r\n        <title [attr.id]=\"componentId + '-title'\" *ngIf=\"title\" [innerHTML]=\"title\"></title>\r\n        <g [attr.transform]=\"outerTransform\" *ngIf=\"!useMask\">\r\n            <g [attr.transform]=\"innerTransform\">\r\n                <path [attr.transform]=\"pathTransform\" fill=\"currentColor\" [attr.d]=\"svgSymbol?.path\"></path>\r\n            </g>\r\n        </g>\r\n        <ng-container *ngIf=\"useMask && maskSymbol\">\r\n            <defs>\r\n                <clipPath [attr.id]=\"componentId + '-clip'\">\r\n                    <path fill=\"currentColor\" [attr.d]=\"maskSymbol?.path\"></path>\r\n                </clipPath>\r\n                <mask [attr.id]=\"componentId + '-mask'\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"\r\n                      maskUnits=\"userSpaceOnUse\" maskContentUnits=\"userSpaceOnUse\">\r\n                    <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"white\"></rect>\r\n                    <g [attr.transform]=\"outerTransform\">\r\n                        <g [attr.transform]=\"innerTransform\">\r\n                            <path [attr.transform]=\"pathTransform\" fill=\"currentColor\"\r\n                                  [attr.d]=\"svgSymbol?.path\"></path>\r\n                        </g>\r\n                    </g>\r\n                </mask>\r\n            </defs>\r\n            <rect fill=\"currentColor\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"\r\n                  [attr.clip-path]=\"'url(#' + componentId + '-clip)'\"\r\n                  [attr.mask]=\"'url(#' + componentId + '-mask)'\">\r\n            </rect>\r\n        </ng-container>\r\n    </svg>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/component/icons/fontawesome-svg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxFontAwesomeSvgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_symbol_service__ = __webpack_require__("../../../../../src/service/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_random_utils__ = __webpack_require__("../../../../../src/utils/random-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fontawesome_interface__ = __webpack_require__("../../../../../src/component/icons/fontawesome.interface.ts");
/**
 * Created by Tuyen Tran on 11/02/2021.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NgxFontAwesomeSvgComponent = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function NgxFontAwesomeSvgComponent(el, _cdr, _symbolService) {
        this._cdr = _cdr;
        this._symbolService = _symbolService;
        this.inlineSvg = false;
        this.useMask = false;
        this._size = 16;
        this._posX = 0;
        this._posY = 0;
        this._rotX = 0;
        this._flipX = false;
        this._flipY = false;
        this._el = el.nativeElement;
        this.componentId = 'fa-svg-' + __WEBPACK_IMPORTED_MODULE_2__utils_random_utils__["a" /* RandomUtils */].getRandomString(8);
        this._symbolService.init();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    NgxFontAwesomeSvgComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!changes) {
            return;
        }
        Object.keys(changes).forEach(function (key) {
            var previousValue = changes[key].previousValue;
            var currentValue = changes[key].currentValue;
            var oldValue = previousValue ? parseFloat(previousValue) : 0;
            var newValue = currentValue ? parseFloat(currentValue) : 0;
            var resetValue = (!!currentValue && typeof currentValue === 'string')
                ? (!currentValue || currentValue.trim().length === 0)
                : !currentValue; // (typeof currentValue === 'number' ? currentValue === 0 : !currentValue);
            switch (key) {
                case 'cssClass':
                    _this._removeCssClasses(previousValue);
                    _this._addCssClasses(currentValue);
                    break;
                case 'name':
                    _this._updateSymbol(_this.prefix, currentValue);
                    break;
                case 'prefix':
                    _this._updateSymbol(currentValue, _this.name);
                    break;
                case 'maskName':
                    _this.useMask = _this.maskName
                        && _this.maskName.trim().length > 0
                        && _this.maskPrefix
                        && _this.maskPrefix.trim().length > 0;
                    _this._updateSymbol(_this.maskPrefix, currentValue, true);
                    break;
                case 'maskPrefix':
                    _this.useMask = _this.maskName
                        && _this.maskName.trim().length > 0
                        && _this.maskPrefix
                        && _this.maskPrefix.trim().length > 0;
                    _this._updateSymbol(currentValue, _this.maskName, true);
                    break;
                // scaling
                case 'shrink':
                case 'grow':
                    var operator = key === 'grow' ? +1 : -1;
                    _this._size = _this._size - operator * oldValue + operator * newValue;
                    break;
                // translating
                case 'left':
                case 'right':
                    var operator2 = key === 'right' ? +1 : -1;
                    _this._posX = _this._posX - operator2 * oldValue + operator2 * newValue;
                    break;
                case 'up':
                case 'down':
                    var operator3 = key === 'down' ? +1 : -1;
                    _this._posY = _this._posY - operator3 * oldValue + operator3 * newValue;
                    break;
                // rotating
                case 'rotate':
                    _this._rotX = newValue;
                    break;
                case 'flip':
                    _this._flipX = (currentValue === 'horizontal' || currentValue === 'both');
                    _this._flipY = (currentValue === 'vertical' || currentValue === 'both');
                    break;
                case 'animation':
                    // turn off animation by set to undefined/null
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_3__fontawesome_interface__["a" /* ANIMATION_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid animation value [' + currentValue + ']. Supporting only [spin|pulse].');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-svg-" + previousValue);
                    }
                    if (!resetValue) {
                        _this._addCssClass("fa-svg-" + currentValue);
                    }
                    break;
                case 'inverse':
                    (!!currentValue) ? _this._addCssClass('fa-inverse') : _this._removeCssClass('fa-inverse');
                    break;
            }
        });
        this.inlineSvg = this.useMask || this._flipX || this._flipY || this._size !== 0
            || this._posX !== 0 || this._posY !== 0 || this._rotX !== 0;
        if (this.inlineSvg) {
            this._addCssClass('svg-inline--fa');
            this._updateSymbolTransform();
        }
        else {
            this._removeCssClass('svg-inline--fa');
        }
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    NgxFontAwesomeSvgComponent.prototype._updateSymbolTransform = function () {
        if (!this.svgSymbol || (this.useMask && !this.maskSymbol)) {
            return;
        }
        var containerWidth = this.useMask ? this.maskSymbol.width : this.svgSymbol.width;
        var width = this.svgSymbol.width;
        var height = this.svgSymbol.height;
        var offsetX = width / height / 2;
        var offsetY = 0.5;
        this.symbolTransform = (offsetX + this._posX / 16) + 'em ' + (offsetY + this._posY / 16) + 'em';
        this.outerTransform = 'translate(' + containerWidth / 2 + ' 256)';
        var innerTranslate = (this._posX !== 0 || this._posY !== 0)
            ? 'translate(' + this._posX * 32 + ', ' + this._posY * 32 + ') '
            : '';
        var innerScale = (this._size !== 0 || this._flipX || this._flipY)
            ? 'scale(' + this._size / 16 * (this._flipX ? -1 : 1) + ', ' + this._size / 16 * (this._flipY ? -1 : 1) + ') '
            : '';
        var innerRotate = (this._rotX !== 0)
            ? 'rotate(' + this._rotX + ' 0 0)'
            : '';
        this.innerTransform = innerTranslate + innerScale + innerRotate;
        this.pathTransform = 'translate(' + width / 2 * -1 + ' -256)';
    };
    NgxFontAwesomeSvgComponent.prototype._updateSymbol = function (prefix, iconName, forMask) {
        if (forMask === void 0) { forMask = false; }
        if (!prefix || prefix.trim().length === 0
            || !iconName || iconName.trim().length === 0) {
            return;
        }
        var symbol = this.inlineSvg
            ? this._symbolService.getSymbol(iconName, prefix)
            : this._symbolService.registerSymbol(iconName, prefix);
        if (!symbol) {
            return;
        }
        if (forMask) {
            this.maskSymbol = symbol;
        }
        else {
            this.svgSymbol = symbol;
        }
        this._addCssClasses(symbol.cssClass);
        this._cdr.markForCheck();
    };
    NgxFontAwesomeSvgComponent.prototype._addCssClasses = function (cssClasses) {
        var _this = this;
        if (cssClasses && cssClasses.indexOf(' ') > -1) {
            var classNames = cssClasses.split(' ');
            if (classNames.length > 1) {
                classNames.forEach(function (className) {
                    _this._addCssClass(className);
                });
            }
        }
        else {
            this._addCssClass(cssClasses);
        }
    };
    NgxFontAwesomeSvgComponent.prototype._removeCssClasses = function (cssClasses) {
        var _this = this;
        if (cssClasses && cssClasses.indexOf(' ') > -1) {
            var classNames = cssClasses.split(' ');
            if (classNames.length > 1) {
                classNames.forEach(function (className) {
                    _this._removeCssClass(className);
                });
            }
        }
        else {
            this._removeCssClass(cssClasses);
        }
    };
    NgxFontAwesomeSvgComponent.prototype._addCssClass = function (className) {
        if (!this.classList) {
            this.classList = [];
        }
        // check uniqueness
        var index = this.classList.indexOf(className);
        if (index === -1) {
            this.classList.push(className);
        }
    };
    NgxFontAwesomeSvgComponent.prototype._removeCssClass = function (className) {
        if (!this.classList) {
            this.classList = [];
        }
        var index = this.classList.indexOf(className);
        if (index >= 0) {
            this.classList.splice(index, 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "prefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeSvgComponent.prototype, "shrink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeSvgComponent.prototype, "grow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeSvgComponent.prototype, "left", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeSvgComponent.prototype, "right", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeSvgComponent.prototype, "up", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeSvgComponent.prototype, "down", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "flip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeSvgComponent.prototype, "rotate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "maskPrefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "maskName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeSvgComponent.prototype, "animation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], NgxFontAwesomeSvgComponent.prototype, "inverse", void 0);
    NgxFontAwesomeSvgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fa-svg',
            template: __webpack_require__("../../../../../src/component/icons/fontawesome-svg.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewEncapsulation */].None
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])('SymbolService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__service_symbol_service__["a" /* NgxSymbolService */]])
    ], NgxFontAwesomeSvgComponent);
    return NgxFontAwesomeSvgComponent;
}());



/***/ }),

/***/ "../../../../../src/component/icons/fontawesome.component.html":
/***/ (function(module, exports) {

module.exports = "<i [ngClass]=\"classList\" aria-hidden=\"true\" [attr.title]=\"title ? title : null\"\r\n   [style]=\"allVars?.length >0 ? getSanitizedStyle(allVars): null\"></i>\r\n"

/***/ }),

/***/ "../../../../../src/component/icons/fontawesome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxFontAwesomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__ = __webpack_require__("../../../../../src/component/icons/fontawesome.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_util_isNumeric__ = __webpack_require__("../../../../rxjs/_esm5/util/isNumeric.js");
/**
 * Created by Tuyen Tran on 11/02/2021.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgxFontAwesomeComponent = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function NgxFontAwesomeComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.vars = new Map();
    }
    NgxFontAwesomeComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!changes) {
            return;
        }
        var prefix = this.prefix;
        Object.keys(changes).forEach(function (key) {
            var previousValue = changes[key].previousValue;
            var currentValue = changes[key].currentValue;
            var resetValue = (!!currentValue && typeof currentValue === 'string')
                ? (!currentValue || currentValue.trim().length === 0)
                : !currentValue;
            // console.log('key=' + key + ',previousValue=' + previousValue + ', currentValue=' + currentValue);
            switch (key) {
                case 'cssClass':
                    _this._removeCssClasses(previousValue);
                    _this._addCssClasses(currentValue);
                    break;
                case 'name':
                    if (!!previousValue) {
                        _this._removeCssClass("fa-" + previousValue);
                    }
                    _this._addCssClass("fa-" + currentValue);
                    break;
                case 'prefix':
                    _this._removeCssClass(previousValue || prefix);
                    _this._addCssClass(currentValue);
                    break;
                case 'scale':// 1 - 10
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__["e" /* SCALE_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid scale value [' + currentValue + ']. Supporting only from 1 to 10.');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-" + previousValue + "x");
                    }
                    if (!resetValue) {
                        _this._addCssClass("fa-" + currentValue + "x");
                    }
                    break;
                case 'size':// lg|sm|xs
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__["f" /* SIZE_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid size value [' + currentValue + ']. Supporting only [lg|sm|xs]');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-" + previousValue);
                    }
                    if (!resetValue) {
                        _this._addCssClass("fa-" + currentValue);
                    }
                    break;
                case 'stack':
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__["g" /* STACK_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid stack value [' + currentValue + ']. Supporting only 1 or 2.');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-stack-" + previousValue + "x");
                    }
                    if (!resetValue) {
                        _this._addCssClass("fa-stack-" + currentValue + "x");
                    }
                    break;
                case 'flip':
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__["b" /* FLIP_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid flip value [' + currentValue + ']. Supporting only [horizontal|vertical|both].');
                    }
                    // NOTE: fa-flip-both is only available in FontAwesome v5 CSS Styles
                    // For backward compatibility (v4), convert 'both' to 'horizontal' and 'vertical'
                    if (!!previousValue) {
                        if (previousValue === 'both') {
                            _this._removeCssClass("fa-flip-horizontal");
                            _this._removeCssClass("fa-flip-vertical");
                            _this._removeCssClass("fa-flip-both");
                        }
                        else {
                            _this._removeCssClass("fa-flip-" + previousValue);
                        }
                    }
                    if (!resetValue) {
                        if (currentValue === 'both') {
                            _this._removeCssClass("fa-flip-horizontal");
                            _this._removeCssClass("fa-flip-vertical");
                        }
                        _this._addCssClass("fa-flip-" + currentValue);
                    }
                    break;
                case 'pull':
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__["c" /* PULL_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid pull value [' + currentValue + ']. Supporting only [right|left].');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-pull-" + previousValue);
                    }
                    if (!resetValue) {
                        _this._addCssClass("fa-pull-" + currentValue);
                    }
                    break;
                case 'rotate':
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__["d" /* ROTATE_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid rotate value [' + currentValue + ']. Supporting only [90|180|270].');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-rotate-" + previousValue);
                    }
                    if (!resetValue) {
                        _this._addCssClass("fa-rotate-" + currentValue);
                    }
                    break;
                case 'rotateBy':
                    if (!resetValue && !Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_util_isNumeric__["a" /* isNumeric */])(currentValue)) {
                        throw new Error('Invalid rotateBy value [' + currentValue + ']. Supporting only numeric value.');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-rotate-by");
                        _this.vars.delete('--fa-rotate-angle');
                    }
                    if (!resetValue) {
                        _this.vars.set('--fa-rotate-angle', currentValue + 'deg');
                        _this._addCssClass("fa-rotate-by");
                    }
                    _this._updateVariables();
                    break;
                case 'animation':
                    // turn off animation by set to undefined/null
                    if (!resetValue && !__WEBPACK_IMPORTED_MODULE_2__fontawesome_interface__["a" /* ANIMATION_VALUE_VALIDATOR */].test(currentValue)) {
                        throw new Error('Invalid animation value [' + currentValue + ']. Supporting only [spin|pulse].');
                    }
                    if (!!previousValue) {
                        _this._removeCssClass("fa-" + previousValue);
                    }
                    if (!resetValue) {
                        _this._addCssClass("fa-" + currentValue);
                    }
                    break;
                case 'border':
                    (!!currentValue) ? _this._addCssClass('fa-border') : _this._removeCssClass('fa-border');
                    break;
                case 'fixedWidth':
                    (!!currentValue) ? _this._addCssClass("fa-fw") : _this._removeCssClass("fa-fw");
                    break;
                case 'inverse':
                    (!!currentValue) ? _this._addCssClass('fa-inverse') : _this._removeCssClass('fa-inverse');
                    break;
            }
        });
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    NgxFontAwesomeComponent.prototype.getSanitizedStyle = function (style) {
        return this._sanitizer.bypassSecurityTrustStyle(style);
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    NgxFontAwesomeComponent.prototype._addCssClasses = function (cssClasses) {
        var _this = this;
        if (cssClasses && cssClasses.indexOf(' ') > -1) {
            var classNames = cssClasses.split(' ');
            if (classNames.length > 1) {
                classNames.forEach(function (className) {
                    _this._addCssClass(className);
                });
            }
        }
        else {
            this._addCssClass(cssClasses);
        }
    };
    NgxFontAwesomeComponent.prototype._removeCssClasses = function (cssClasses) {
        var _this = this;
        if (cssClasses && cssClasses.indexOf(' ') > -1) {
            var classNames = cssClasses.split(' ');
            if (classNames.length > 1) {
                classNames.forEach(function (className) {
                    _this._removeCssClass(className);
                });
            }
        }
        else {
            this._removeCssClass(cssClasses);
        }
    };
    NgxFontAwesomeComponent.prototype._addCssClass = function (className) {
        if (!this.classList) {
            this.classList = [];
        }
        // check uniqueness
        var index = this.classList.indexOf(className);
        if (index === -1) {
            this.classList.push(className);
        }
    };
    NgxFontAwesomeComponent.prototype._removeCssClass = function (className) {
        if (!this.classList) {
            this.classList = [];
        }
        var index = this.classList.indexOf(className);
        if (index >= 0) {
            this.classList.splice(index, 1);
        }
    };
    NgxFontAwesomeComponent.prototype._updateVariables = function () {
        var _this = this;
        this.allVars = '';
        if (this.vars.size === 0) {
            return;
        }
        this.vars.forEach(function (value, key) {
            _this.allVars += key + ': ' + value + ';';
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "prefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeComponent.prototype, "scale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeComponent.prototype, "stack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "flip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "pull", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeComponent.prototype, "rotate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxFontAwesomeComponent.prototype, "rotateBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFontAwesomeComponent.prototype, "animation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], NgxFontAwesomeComponent.prototype, "border", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], NgxFontAwesomeComponent.prototype, "fixedWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], NgxFontAwesomeComponent.prototype, "inverse", void 0);
    NgxFontAwesomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fa',
            template: __webpack_require__("../../../../../src/component/icons/fontawesome.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], NgxFontAwesomeComponent);
    return NgxFontAwesomeComponent;
}());



/***/ }),

/***/ "../../../../../src/component/icons/fontawesome.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SCALE_VALUE_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STACK_VALUE_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SIZE_VALUE_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FLIP_VALUE_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PULL_VALUE_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANIMATION_VALUE_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ROTATE_VALUE_VALIDATOR; });
/**
 * Created by Tuyen Tran on 11/02/2021.
 */
var SCALE_VALUE_VALIDATOR = /^([1-9]|10)$/; // 1 to 10
var STACK_VALUE_VALIDATOR = /^([1|2])$/; // 1|2
var SIZE_VALUE_VALIDATOR = /^(lg|sm|xs)$/;
var FLIP_VALUE_VALIDATOR = /['horizontal'|'vertical'|'both']/;
var PULL_VALUE_VALIDATOR = /['right'|'left']/;
var ANIMATION_VALUE_VALIDATOR = /['spin'|'pulse']/;
var ROTATE_VALUE_VALIDATOR = /[90|180|270]/;


/***/ }),

/***/ "../../../../../src/component/symbol/symbol.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"symbols && symbols.length > 0\">\r\n    <svg style=\"display: none;\" *ngFor=\"let symbol of symbols\">\r\n        <symbol role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"\r\n                [attr.id]=\"symbol?.id\" [attr.viewBox]=\"'0 0 ' + symbol?.width + ' ' + symbol?.height\">\r\n            <path fill=\"currentColor\" [attr.d]=\"symbol?.path\"></path>\r\n        </symbol>\r\n    </svg>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/component/symbol/symbol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxSymbolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_symbol_service__ = __webpack_require__("../../../../../src/service/symbol.service.ts");
/**
 * Created by Tuyen Tran on 11/02/2021.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NgxSymbolsComponent = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function NgxSymbolsComponent(symbolService, cdr) {
        var _this = this;
        this.symbolService = symbolService;
        this.cdr = cdr;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this._subscriptions = [];
        this.symbols = [];
        this._subscriptions.push(this.symbolService.getSymbolAdded()
            .subscribe(function (newSymbol) {
            if (newSymbol) {
                setTimeout(function () {
                    _this.symbols.push(newSymbol);
                    _this.cdr.markForCheck();
                });
            }
        }));
        this.cdr.markForCheck();
    }
    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------
    // implements OnDestroy
    NgxSymbolsComponent.prototype.ngOnDestroy = function () {
        // unsubscribe all subscriptions
        this._subscriptions.forEach(function (sub) { return sub && sub.unsubscribe(); });
        this._subscriptions.length = 0;
    };
    NgxSymbolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            selector: 'ngx-symbols',
            template: __webpack_require__("../../../../../src/component/symbol/symbol.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])('SymbolService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_symbol_service__["a" /* NgxSymbolService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], NgxSymbolsComponent);
    return NgxSymbolsComponent;
}());



/***/ }),

/***/ "../../../../../src/component/symbol/symbol.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_NGX_FA_OPTIONS; });
/**
 * Created by Tuyen Tran on 11/02/2021.
 */
var DEFAULT_NGX_FA_OPTIONS = {
    prefix: [],
    svgSupport: false
};


/***/ }),

/***/ "../../../../../src/component/text/layers-text.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxLayersTextDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_fontawesome_interface__ = __webpack_require__("../../../../../src/component/icons/fontawesome.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_util_isNumeric__ = __webpack_require__("../../../../rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Tuyen Tran on 11/02/2021.
 */




var UNITS_IN_GRID = 16;
var NgxLayersTextDirective = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function NgxLayersTextDirective(el, _sanitizer) {
        this._sanitizer = _sanitizer;
        // -------------------------------------------------------------------------
        // Binding
        // -------------------------------------------------------------------------
        this.defaultClass = true;
        this._size = 16;
        this._posX = 0;
        this._posY = 0;
        this._rotX = 0;
        this._flipX = false;
        this._flipY = false;
        this._startCentered = true;
        this._el = el.nativeElement;
        if (window && window.navigator && window.navigator.userAgent) {
            this._isIE = window.navigator.userAgent.indexOf('MSIE') > -1
                || window.navigator.userAgent.indexOf('Trident/') > -1;
        }
        else {
            this._isIE = false;
        }
    }
    Object.defineProperty(NgxLayersTextDirective.prototype, "regularTransform", {
        get: function () {
            return this.getTransform();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxLayersTextDirective.prototype, "webkitTransform", {
        get: function () {
            return this.getTransform();
        },
        enumerable: true,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    NgxLayersTextDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!changes) {
            return;
        }
        Object.keys(changes).forEach(function (key) {
            var previousValue = changes[key].previousValue;
            var currentValue = changes[key].currentValue;
            var oldValue = previousValue ? parseFloat(previousValue) : 0;
            var newValue = currentValue ? parseFloat(currentValue) : 0;
            switch (key) {
                // scaling
                case 'shrink':
                case 'grow':
                    var operator = key === 'grow' ? +1 : -1;
                    _this._size = _this._size - operator * oldValue + operator * newValue;
                    break;
                // translating
                case 'left':
                case 'right':
                    var operator2 = key === 'right' ? +1 : -1;
                    _this._posX = _this._posX - operator2 * oldValue + operator2 * newValue;
                    break;
                case 'up':
                case 'down':
                    var operator3 = key === 'down' ? +1 : -1;
                    _this._posY = _this._posY - operator3 * oldValue + operator3 * newValue;
                    break;
                // rotating
                case 'rotate':
                    if (Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_util_isNumeric__["a" /* isNumeric */])(currentValue)) {
                        _this._rotX = newValue;
                    }
                    else {
                        throw new Error('Invalid rotate value [' + currentValue + ']. Supporting only numeric value.');
                    }
                    break;
                case 'flip':
                    if (__WEBPACK_IMPORTED_MODULE_1__icons_fontawesome_interface__["b" /* FLIP_VALUE_VALIDATOR */].test(currentValue)) {
                        _this._flipX = (currentValue === 'horizontal' || currentValue === 'both');
                        _this._flipY = (currentValue === 'vertical' || currentValue === 'both');
                    }
                    else {
                        throw new Error('Invalid flip value [' + currentValue + ']. Supporting only [horizontal|vertical|both].');
                    }
                    break;
            }
        });
        this.performTransform = this._flipX || this._flipY || this._size !== 0
            || this._posX !== 0 || this._posY !== 0 || this._rotX !== 0;
        if (this.performTransform) {
            this._updateTransform();
        }
    };
    NgxLayersTextDirective.prototype.getSanitizedStyle = function (style) {
        return this._sanitizer.bypassSecurityTrustStyle(style);
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    NgxLayersTextDirective.prototype._updateTransform = function () {
        var d = UNITS_IN_GRID;
        var width = UNITS_IN_GRID;
        var height = UNITS_IN_GRID;
        if (this._isIE && this._el) {
            var computedFontSize = (this._el.style && this._el.style.fontSize) ? parseInt(this._el.style.fontSize, 10) : 16;
            // parseInt(window.getComputedStyle(this._el).fontSize, 10);
            var boundingClientRect = this._el.getBoundingClientRect();
            width = boundingClientRect.width / computedFontSize;
            height = boundingClientRect.height / computedFontSize;
        }
        this.transform = '';
        if (this._startCentered && this._isIE) {
            this.transform += 'translate('
                + (this._posX / d - width / 2) + 'em, '
                + (this._posY / d - height / 2) + 'em) ';
        }
        else if (this._startCentered) {
            this.transform += 'translate('
                + 'calc(-50% + ' + (this._posX / d) + 'em), '
                + 'calc(-50% + ' + (this._posY / d) + 'em)) ';
        }
        else {
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
    };
    NgxLayersTextDirective.prototype.getTransform = function () {
        return this.performTransform ? this.getSanitizedStyle(this.transform) : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostBinding */])('class.fa-layers-text'),
        __metadata("design:type", Object)
    ], NgxLayersTextDirective.prototype, "defaultClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostBinding */])('style.transform'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgxLayersTextDirective.prototype, "regularTransform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostBinding */])('style.webkitTransform'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgxLayersTextDirective.prototype, "webkitTransform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxLayersTextDirective.prototype, "shrink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxLayersTextDirective.prototype, "grow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxLayersTextDirective.prototype, "left", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxLayersTextDirective.prototype, "right", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxLayersTextDirective.prototype, "up", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxLayersTextDirective.prototype, "down", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], NgxLayersTextDirective.prototype, "flip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], NgxLayersTextDirective.prototype, "rotate", void 0);
    NgxLayersTextDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: '[faLayersText]'
            // Replaced with @HostBinding
            // host: {
            // 	'[class.fa-layers-text]': 'true', // Default class
            // 	'[style.transform]': 'performTransform ? getSanitizedStyle(transform) : null',
            // 	'[style.webkitTransform]': 'performTransform ? getSanitizedStyle(transform) : null'
            // }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], NgxLayersTextDirective);
    return NgxLayersTextDirective;
}());



/***/ }),

/***/ "../../../../../src/ngx-fontawesome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxFontAwesomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_symbol_symbol_interface__ = __webpack_require__("../../../../../src/component/symbol/symbol.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_symbol_service__ = __webpack_require__("../../../../../src/service/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_symbol_symbol_component__ = __webpack_require__("../../../../../src/component/symbol/symbol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_icons_fontawesome_svg_component__ = __webpack_require__("../../../../../src/component/icons/fontawesome-svg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_icons_fontawesome_component__ = __webpack_require__("../../../../../src/component/icons/fontawesome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_text_layers_text_directive__ = __webpack_require__("../../../../../src/component/text/layers-text.directive.ts");
/**
 * Created by Tuyen Tran on 11/02/2021.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NgxFontAwesomeModule = (function () {
    function NgxFontAwesomeModule() {
    }
    NgxFontAwesomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__component_symbol_symbol_component__["a" /* NgxSymbolsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__component_icons_fontawesome_component__["a" /* NgxFontAwesomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_icons_fontawesome_svg_component__["a" /* NgxFontAwesomeSvgComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_text_layers_text_directive__["a" /* NgxLayersTextDirective */],
                __WEBPACK_IMPORTED_MODULE_5__component_symbol_symbol_component__["a" /* NgxSymbolsComponent */]
            ],
            providers: [
                { provide: 'ngxFontAwesome', useValue: __WEBPACK_IMPORTED_MODULE_3__component_symbol_symbol_interface__["a" /* DEFAULT_NGX_FA_OPTIONS */] },
                { provide: 'SymbolService', useClass: __WEBPACK_IMPORTED_MODULE_4__service_symbol_service__["a" /* NgxSymbolService */] }
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__component_icons_fontawesome_component__["a" /* NgxFontAwesomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_icons_fontawesome_svg_component__["a" /* NgxFontAwesomeSvgComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_text_layers_text_directive__["a" /* NgxLayersTextDirective */],
                __WEBPACK_IMPORTED_MODULE_5__component_symbol_symbol_component__["a" /* NgxSymbolsComponent */]
            ]
        })
    ], NgxFontAwesomeModule);
    return NgxFontAwesomeModule;
}());



/***/ }),

/***/ "../../../../../src/service/symbol.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxSymbolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_symbol_symbol_interface__ = __webpack_require__("../../../../../src/component/symbol/symbol.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_symbol_symbol_component__ = __webpack_require__("../../../../../src/component/symbol/symbol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by Tuyen Tran on 6/23/2018.
 */




var NgxSymbolService = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function NgxSymbolService(componentFactoryResolver, appRef, injector, options) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this._cachedSymbols = new Map();
        this._registeredSymbols = new Map();
        this._initialized = false;
        // source of observable
        this._symbolAddedSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._symbolAdded = this._symbolAddedSource.asObservable();
        this._iconBundles = {};
        this._options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__component_symbol_symbol_interface__["a" /* DEFAULT_NGX_FA_OPTIONS */], options);
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    // get the state changed observable
    NgxSymbolService.prototype.getSymbolAdded = function () {
        return this._symbolAdded;
    };
    NgxSymbolService.prototype.init = function () {
        var _this = this;
        if (!this._initialized) {
            if (this._options.svgSupport && this._options.prefix && this._options.prefix.length > 0) {
                this._options.prefix.forEach(function (p) { return _this._iconBundles[p] = _this.injector.get(p); });
            }
            this._appendComponentToBody(__WEBPACK_IMPORTED_MODULE_2__component_symbol_symbol_component__["a" /* NgxSymbolsComponent */]);
            this._initialized = true;
        }
    };
    NgxSymbolService.prototype.getSymbol = function (name, prefix) {
        // create symbol ID
        var symbolId = prefix + "-" + name;
        // return if it existed
        var symbol = this._cachedSymbols.get(symbolId);
        if (symbol) {
            return symbol;
        }
        // look up the supporting Icon Pack (far/fas/fab...)
        var iconsPack = this._iconBundles[prefix];
        if (!iconsPack) {
            return null;
        }
        // check if this glyph name is supported by icon pack
        var iconDef = this._searchByName(iconsPack, name);
        if (!iconDef || !iconDef.icon) {
            return null;
        }
        // create symbol ID
        var icon = iconDef.icon;
        var width = icon[0];
        var height = icon[1];
        var cssClass = 'fa-w-' + Math.ceil(width / height * 16);
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
    };
    NgxSymbolService.prototype.registerSymbol = function (name, prefix) {
        // create symbol ID
        var symbolId = prefix + "-" + name;
        // return if it existed
        var symbol = this._registeredSymbols.get(symbolId);
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
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    NgxSymbolService.prototype._searchByName = function (iconPacks, name) {
        var found = Object.keys(iconPacks).find(function (glyphName) {
            var iconDef = iconPacks[glyphName];
            return iconDef.iconName === name;
        });
        return found ? iconPacks[found] : null;
    };
    NgxSymbolService.prototype._appendComponentToBody = function (component) {
        // 1. Create a component reference from the component
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        // 4. Append DOM element to the body as the first child
        document.body.insertBefore(domElem, document.body.children.item(0));
    };
    NgxSymbolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])('ngxFontAwesome')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], Object])
    ], NgxSymbolService);
    return NgxSymbolService;
}());



/***/ }),

/***/ "../../../../../src/utils/random-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomUtils; });
/**
 * Created by Tuyen Tran on 3/20/2017.
 */
var RandomUtils = (function () {
    function RandomUtils() {
    }
    RandomUtils.getRandomString = function (length) {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    };
    RandomUtils.getUUID = function () {
        if (typeof (window) !== 'undefined'
            && typeof (window.crypto) !== 'undefined'
            && typeof (window.crypto.getRandomValues) !== 'undefined') {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + '-' + this.pad4(buf[2]) + '-' + this.pad4(buf[3])
                + '-' + this.pad4(buf[4]) + '-' + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        // Otherwise, just use Math.random
        // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
        return this.random4() + this.random4() + '-' + this.random4() + '-' + this.random4()
            + '-' + this.random4() + '-' + this.random4() + this.random4() + this.random4();
    };
    RandomUtils.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = '0' + ret;
        }
        return ret;
    };
    RandomUtils.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return RandomUtils;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map