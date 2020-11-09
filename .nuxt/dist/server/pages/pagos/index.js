exports.ids = [7];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("42bf1c40", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("257af960", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=51b8d1cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-item"},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=51b8d1cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "517f4738"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo.88ab39e.png";

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ion-2x:before{font-size:2.3rem}.iconos_header{padding-left:1.4rem;color:#999}@media (max-width:991.98px){.iconos_header{padding-left:.5rem;color:#999}}.iconos_header:hover{color:#fff}header{content:\"\";top:0;height:500px;background:#000;background:linear-gradient(180deg,#000 0,rgba(145,232,66,0) 50%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#000000\",endColorstr=\"#91e842\",GradientType=0);position:absolute;left:0;width:100%;z-index:5}@media (max-width:1199.98px){header{top:0}}header .navbar-brand{text-transform:uppercase;letter-spacing:.2em;font-weight:400}header .navbar-brand.absolute{position:absolute}@media (max-width:991.98px){header .navbar-brand.absolute{position:relative}}header .navbar{padding-top:0;padding-bottom:0;background:none!important;position:relative;font-family:\"Montserrat\",sans-serif}@media (max-width:1199.98px){header .navbar{background:#000!important;padding-top:.5rem;padding-bottom:.5rem}}header .navbar .nav-link{padding:1.7rem 1rem;outline:none!important;font-size:14px;text-transform:uppercase;letter-spacing:.2em}header .navbar .nav-link.active{color:#fff}@media (max-width:991.98px){.navbar-nav{display:inline;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}header .navbar .nav-link{padding:.5rem 0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(41);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".slider-item{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-repeat:no-repeat;background-position:50%;height:100vh;min-height:700px;position:relative}.slider-item .slider-text{color:#fff;height:100vh;min-height:700px}.slider-item .slider-text .child-name{font-size:40px;color:#fff}.slider-item .slider-text h1{font-size:50px;color:#fff;line-height:1.2;font-weight:300!important;text-transform:uppercase;margin-bottom:30px;margin-left:.5em}.slider-item .slider-text h1 span{color:#fff;background-color:#71774b;box-shadow:.5em 0 0 #71774b,-.5em 0 0 #71774b}@media (max-width:991.98px){.slider-item .slider-text h1{font-size:40px}}.slider-item .slider-text p{font-size:20px;line-height:1.5;font-weight:300;color:#fff;margin:0 auto}.slider-item .slider-text p a{color:#71774b;text-decoration:underline}.slider-item .slider-text p a:hover{color:#fff;text-decoration:underline}.slider-item .slider-text p.sub-text{line-height:2}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gomasTres.7ab42d6.png";

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=e1cb7136&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header role=\"banner\">","</header>",[_vm._ssrNode("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<a href=\"/\" class=\"navbar-brand \"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt style=\"margin-left:-1rem;\"></a> <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbars\" aria-controls=\"navbars\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"><span class=\"navbar-toggler-icon\"></span></button> "),_vm._ssrNode("<div id=\"navbars\" class=\"collapse navbar-collapse\">","</div>",[_vm._ssrNode("<ul class=\"navbar-nav pl-md-5 ml-auto\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_vm._ssrNode("<a class=\"nav-link\">","</a>",[_c('nuxt-link',{staticStyle:{"text-decoration":"none","color":"inherit","padding-left":"0.5rem"},attrs:{"to":"/gomas"}},[_vm._v("Gomitas ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_vm._ssrNode("<a class=\"nav-link\">","</a>",[_c('nuxt-link',{staticStyle:{"text-decoration":"none","color":"inherit","padding-left":"0.5rem"},attrs:{"to":"/gelatinas"}},[_vm._v(" Gelatinas ")])],1)])],2),_vm._ssrNode(" <div class=\"navbar-nav ml-auto\"><a target=\"_blank\" href=\"https://www.instagram.com/gel.shot/\" class=\"iconos_header\"><i class=\"ion-social-instagram-outline ion-2x\"></i></a> <a target=\"_blank\" href=\"https://www.facebook.com/Gelshot-585313455478794\" class=\"iconos_header\"><i class=\"ion-social-facebook-outline ion-2x\"></i></a></div>")],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=e1cb7136&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "26a570eb"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(35).default})


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2eb9b964", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(67);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(68);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(69);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, ".container_exterior{background-color:#5ba8db;margin:0 auto;padding:3% 2.5% 2%;width:35%}.top_decoration{background-color:grey;margin:8% auto 0;width:35%;height:2%;display:flex}.rectangulo{background-color:#fff;width:50%;height:8px;margin:8px 0 8px 25%;border-radius:2px}.container_pagos{background-color:#f5f5f5;margin:0 auto;padding-top:7%;width:100%}.pagos_h2_div{background-color:#8eccf5;padding:5% 5% .5%;border-radius:20px 20px 0 0}.pagos_h2{text-align:center;font-weight:700;font-size:240%;color:#3098dd}.form_content{padding-left:8%}.form_unidad{padding-bottom:2.5%}.form_unidad h3{font-weight:500}.form_unidad p{font-size:120%}.input_gran{width:60%}.input_med{width:45%}.input_peq{width:30%}.selector_metodo{width:89.48%;display:flex}.selector_metodo input{margin:0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.nequi{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.davivienda{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.contraentrega{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.selector_metodo input:active+.logo_metodo{opacity:.9}.selector_metodo input:checked+.logo_metodo{-moz-filter:none;filter:none}.logo_metodo{cursor:pointer;background-size:contain;background-repeat:no-repeat;margin:0 auto;width:80px;height:80px;transition:all .1s ease-in;-moz-filter:brightness(1.8) grayscale(1) opacity(.7);filter:brightness(1.8) grayscale(1) opacity(.7)}.logo_metodo:hover{-moz-filter:brightness(1.2) grayscale(.5) opacity(.9);filter:brightness(1.2) grayscale(.5) opacity(.9)}.form_button{background-color:#2e962a;margin:12% 30% 8%;font-family:\"Quicksand\",sans-serif;font-weight:700;font-size:150%;width:40%;height:40px;text-align:center;color:#f5f5f5;border-radius:14px;border:none;transition:.15}.form_button:focus{outline:none}.form_button:active{background-color:#275c29;transition:.2s}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nequi.b6a877c.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/davivienda.78dcb95.png";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contraentrega.df2499d.png";

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pagos/index.vue?vue&type=template&id=0d9bbed8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navigation'),_vm._ssrNode(" <div class=\"st-content-inner\"><section class=\"page-header-wrapper\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"page-header\"><h1>Catalogo</h1></div> <ol class=\"breadcrumb\"><li><a href=\"#\">Inicio</a></li> <li class=\"active\">ㅤ/ㅤ</li> <li><a href=\"#\">Catalogo</a></li> <li class=\"active\">ㅤ/ㅤ</li> <li class=\"active\">Gomitas</li></ol></div></div></div></section> <div class=\"container\"><div class=\"content-wrapper\"><div class=\"inner-content\"><div class=\"top_decoration\"><div class=\"rectangulo\"></div></div> <div class=\"container_exterior\"><div class=\"pagos_h2_div\"><h2 class=\"pagos_h2\">Formulario de compra</h2></div> <div class=\"container_pagos\"><div class=\"form_content\"><div class=\"form_unidad\"><h3>Nombre completo:</h3> <input type=\"text\" class=\"input_gran\"></div> <div class=\"form_unidad\"><h3>Correo electrónico:</h3> <input type=\"text\" class=\"input_gran\"></div> <div class=\"form_unidad\"><h3>Número de celular:</h3> <input type=\"text\" class=\"input_med\"></div> <div class=\"form_unidad\"><h3>Dirección:</h3> <input type=\"text\" class=\"input_gran\"> <p>Residencia</p> <input type=\"text\" class=\"input_peq\"> <p>Ciudad</p></div> <div class=\"form_unidad\"><h3>Total a pagar:</h3> <p>$20.000</p></div> <div class=\"form_unidad\"><h3>Método de pago:</h3></div> <div class=\"selector_metodo\"><input type=\"radio\" id=\"nequi\" name=\"metodo\" value=\"nequi\"> <label for=\"nequi\" class=\"logo_metodo nequi\"></label> <input type=\"radio\" id=\"davivienda\" name=\"metodo\" value=\"davivienda\"> <label for=\"davivienda\" class=\"logo_metodo davivienda\"></label> <input type=\"radio\" id=\"contraentrega\" name=\"metodo\" value=\"contraentrega\"> <label for=\"contraentrega\" class=\"logo_metodo contraentrega\"></label></div></div> <button class=\"form_button\">Confirmar</button></div></div></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pagos/index.vue?vue&type=template&id=0d9bbed8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pagos/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var pagosvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Catálogo - Gomas",
      meta: [{
        hid: "descripcion",
        name: "descripcion",
        content: "En esta página se muestra el menú de gomas gelshot disponibles"
      }],
      htmlAttrs: {
        lang: 'es'
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/pagos/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pagosvue_type_script_lang_js_ = (pagosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pagos/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pagosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2928d709"
  
)

/* harmony default export */ var pagos = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(42).default})


/***/ })

};;
//# sourceMappingURL=index.js.map