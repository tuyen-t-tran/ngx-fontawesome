webpackJsonp(["styles"],{

/***/ "../../../../../assets/css/ngx-fontawesome.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../assets/css/ngx-fontawesome.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/lib/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--8-3!./ngx-fontawesome.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/lib/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--8-3!./ngx-fontawesome.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../../example/assets/css/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../example/assets/css/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../example/assets/css/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *:before, *:after {\r\n    box-sizing: inherit;\r\n}\r\n\r\narticle, header, section, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    background: #f0e8e8 none repeat scroll 0 0;\r\n    color: #222;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-size: 100%;\r\n    line-height: 1.5;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n}\r\n\r\na {\r\n    font-family: \"Raleway\", sans-serif;\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n\r\na:hover, a:focus {\r\n    color: #373e18;\r\n}\r\n\r\nsection {\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 3em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\nh2 {\r\n    color: #1a0e0e;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    margin: 0;\r\n    line-height: normal;\r\n    text-transform: uppercase;\r\n}\r\n\r\nh2 span {\r\n    display: block;\r\n    padding: 0;\r\n    font-size: 18px;\r\n    opacity: 0.7;\r\n    margin-top: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#float-right {\r\n    float: right;\r\n}\r\n\r\n/* ******************************************************\r\n\tHeader\r\n*********************************************************/\r\n\r\n/* Header*/\r\n.demo-app-header {\r\n    float: left;\r\n    width: 100%;\r\n    padding-top: 3em;\r\n}\r\n\r\n.rt-heading {\r\n    border-bottom: solid 1px #1c7ed6;\r\n    padding-bottom: 10px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.demo-app-header h1 {\r\n    color: #1c7ed6;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n    margin: 0;\r\n    line-height: normal;\r\n    text-align: center;\r\n}\r\n\r\n.demo-app-header h2 {\r\n    color: #1c7ed6;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin: 5px 0 0;\r\n    line-height: normal;\r\n    text-align: center;\r\n}\r\n\r\n.demo-app-header h1 span {\r\n    display: block;\r\n    padding: 0;\r\n    font-size: 22px;\r\n    opacity: 0.7;\r\n    margin-top: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.demo-app-header span {\r\n    display: block;\r\n    padding: 0;\r\n    font-size: 22px;\r\n    opacity: 0.7;\r\n    margin-top: 5px;\r\n}\r\n\r\n.demo-section {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n\r\n.demo-section .external-link {\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    padding-left: 10px;\r\n    color: darkgrey;\r\n}\r\n\r\n/*\r\n********************************************************\r\n\tResponsive Grids\r\n********************************************************\r\n*/\r\n\r\n.rt-container {\r\n    margin: 0 auto;\r\n    padding-left: 12px;\r\n    padding-right: 12px;\r\n}\r\n\r\n.rt-row:before, .rt-row:after {\r\n    display: table;\r\n    line-height: 0;\r\n    content: \"\";\r\n}\r\n\r\n.rt-row:after {\r\n    clear: both;\r\n}\r\n\r\n[class^=\"col-rt-\"] {\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    padding: 0 15px;\r\n    min-height: 1px;\r\n    position: relative;\r\n}\r\n\r\n\r\n@media (min-width: 768px) {\r\n    .rt-container {\r\n        width: 750px;\r\n    }\r\n\r\n    [class^=\"col-rt-\"] {\r\n        float: left;\r\n        width: 49.9999999999%;\r\n    }\r\n\r\n    .col-rt-6, .col-rt-12 {\r\n        width: 100%;\r\n    }\r\n\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .rt-container {\r\n        width: 1170px;\r\n    }\r\n\r\n    .col-rt-1 {\r\n        width: 16.6%;\r\n    }\r\n\r\n    .col-rt-2 {\r\n        width: 30.33%;\r\n    }\r\n\r\n    .col-rt-3 {\r\n        width: 50%;\r\n    }\r\n\r\n    .col-rt-4 {\r\n        width: 67.664%;\r\n    }\r\n\r\n    .col-rt-5 {\r\n        width: 83.33%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 240px) and (max-width: 768px) {\r\n    .demo-app-header h1,\r\n    .demo-app-header h2,\r\n    .scriptnav ul {\r\n        text-align: center;\r\n    }\r\n\r\n    .scriptnav ul {\r\n        margin-top: 12px;\r\n    }\r\n\r\n    #float-right {\r\n        float: none;\r\n    }\r\n}\r\n\r\nbody {\r\n    font-family: 'Helvetica', sans-serif;\r\n    background-color: #e7e7e7;\r\n    color: #777;\r\n    font-weight: 300;\r\n}\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    display: block;\r\n    max-width: 800px;\r\n}\r\n\r\n.container > *:not(.tab-wrap) {\r\n    padding: 0 80px;\r\n}\r\n\r\n/*\r\nh1,\r\nh2 {\r\n    margin: 0;\r\n    color: #444;\r\n    text-align: center;\r\n    font-size: 150%;\r\n    font-weight: 400;\r\n}\r\n\r\nh2.heading {\r\n    font-size: 2em;\r\n    margin-bottom:8px;\r\n}\r\n\r\n\r\nh2 {\r\n    font-size: 1em;\r\n    margin-bottom: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 130%;\r\n    font-weight: 400;\r\n    margin-top: 10px;\r\n    margin-bottom:10px;\r\n}\r\n*/\r\n\r\np {\r\n    line-height: 1.6;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/* TABS */\r\n\r\n.tab-wrap {\r\n    transition: 0.3s box-shadow ease;\r\n    border-radius: 6px;\r\n    max-width: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    margin: 40px 0;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.tab-wrap:hover {\r\n    box-shadow: 0 12px 23px rgba(0, 0, 0, 0.23), 0 10px 10px rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.tab {\r\n    display: none;\r\n}\r\n\r\n.tab:checked:nth-of-type(1) ~ .tab__content:nth-of-type(1) {\r\n    opacity: 1;\r\n    transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n    position: relative;\r\n    top: 0;\r\n    z-index: 100;\r\n    transform: translateY(0px);\r\n    text-shadow: 0 0 0;\r\n}\r\n\r\n.tab:checked:nth-of-type(2) ~ .tab__content:nth-of-type(2) {\r\n    opacity: 1;\r\n    transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n    position: relative;\r\n    top: 0;\r\n    z-index: 100;\r\n    transform: translateY(0px);\r\n    text-shadow: 0 0 0;\r\n}\r\n\r\n.tab:checked:nth-of-type(3) ~ .tab__content:nth-of-type(3) {\r\n    opacity: 1;\r\n    transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n    position: relative;\r\n    top: 0;\r\n    z-index: 100;\r\n    transform: translateY(0px);\r\n    text-shadow: 0 0 0;\r\n}\r\n\r\n.tab:checked:nth-of-type(4) ~ .tab__content:nth-of-type(4) {\r\n    opacity: 1;\r\n    transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n    position: relative;\r\n    top: 0;\r\n    z-index: 100;\r\n    transform: translateY(0px);\r\n    text-shadow: 0 0 0;\r\n}\r\n\r\n.tab:checked:nth-of-type(5) ~ .tab__content:nth-of-type(5) {\r\n    opacity: 1;\r\n    transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n    position: relative;\r\n    top: 0;\r\n    z-index: 100;\r\n    transform: translateY(0px);\r\n    text-shadow: 0 0 0;\r\n}\r\n\r\n.tab:first-of-type:not(:last-of-type) + label {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.tab:not(:first-of-type):not(:last-of-type) + label {\r\n    border-radius: 0;\r\n}\r\n\r\n.tab:last-of-type:not(:first-of-type) + label {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.tab:checked + label {\r\n    background-color: #fff;\r\n    box-shadow: 0 -1px 0 #fff inset;\r\n    cursor: default;\r\n}\r\n\r\n.tab:checked + label:hover {\r\n    box-shadow: 0 -1px 0 #fff inset;\r\n    background-color: #fff;\r\n}\r\n\r\n.tab + label {\r\n    box-shadow: 0 -1px 0 #eee inset;\r\n    border-radius: 6px 6px 0 0;\r\n    cursor: pointer;\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #333;\r\n    -ms-flex-positive: 3;\r\n    flex-grow: 3;\r\n    text-align: center;\r\n    background-color: #f2f2f2;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    text-align: center;\r\n    transition: 0.3s background-color ease, 0.3s box-shadow ease;\r\n    height: 50px;\r\n    box-sizing: border-box;\r\n    padding: 15px;\r\n}\r\n\r\n.tab + label:hover {\r\n    background-color: #f9f9f9;\r\n    box-shadow: 0 1px 0 #f4f4f4 inset;\r\n}\r\n\r\n.tab__content {\r\n    padding: 10px 25px;\r\n    background-color: transparent;\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: -1;\r\n    opacity: 0;\r\n    left: 0;\r\n    transform: translateY(-3px);\r\n    border-radius: 6px;\r\n}\r\n\r\n/* Document */\r\n\r\n.show-off {\r\n    padding: 1rem;\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-radius: .25rem;\r\n    border-color: #f1f3f5;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n.docs-generated > .table-wrap {\r\n    width: 100%;\r\n    overflow: auto;\r\n    margin-bottom: 1.5rem\r\n}\r\n\r\n.docs-generated table {\r\n    width: 100%;\r\n    display: table;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    background: #fff\r\n}\r\n\r\n.docs-generated table thead tr {\r\n    text-align: left\r\n}\r\n\r\n.docs-generated table th {\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: #f1f3f5;\r\n    padding: 1rem;\r\n    font-weight: bold\r\n}\r\n\r\n.docs-generated table tr {\r\n    text-align: left\r\n}\r\n\r\n.docs-generated table td {\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: #f1f3f5;\r\n    padding: 1rem\r\n}\r\n\r\n.docs-generated code.inline {\r\n    display: inline;\r\n    margin-left: .25rem;\r\n    margin-right: .25rem;\r\n    white-space: nowrap;\r\n}\r\n\r\n.docs-generated code {\r\n    font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n    font-size: 0.9rem;\r\n    color: #ff922b;\r\n}\r\n\r\n.text-left,\r\n.align-left {\r\n    text-align: left;\r\n}\r\n\r\n.text-center {\r\n    text-align: center;\r\n}\r\n\r\n.demo-group {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.demo-item {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin-right: 10px;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../assets/css/ngx-fontawesome.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MISSING FONTAWESOME 5 STYLES */\n/* Added to support animation of SVG icons */\n.fa-svg-spin {\n  transform-box: fill-box;\n  transform-origin: 50% 50%;\n  animation: fa-spin 2s linear infinite; }\n\n.fa-svg-pulse {\n  transform-box: fill-box;\n  transform-origin: 50% 50%;\n  animation: fa-spin 1s infinite steps(8); }\n\n/* Added to support rotateBy */\n.fa-rotate-by {\n  transform: rotate(0);\n  transform: rotate(var(--fa-rotate-angle, 0)); }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../../example/assets/css/styles.css");
module.exports = __webpack_require__("../../../../../assets/css/ngx-fontawesome.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map