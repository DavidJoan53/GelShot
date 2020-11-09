exports.ids = [4];
exports.modules = Array(32).concat([
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo.88ab39e.png";

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ion-2x:before{font-size:2.3rem}.iconos_header{padding-left:1.4rem;color:#999}@media (max-width:991.98px){.iconos_header{padding-left:.5rem;color:#999}}.iconos_header:hover{color:#fff}header{content:\"\";top:0;height:500px;background:#000;background:linear-gradient(180deg,#000 0,rgba(145,232,66,0) 50%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#000000\",endColorstr=\"#91e842\",GradientType=0);position:absolute;left:0;width:100%;z-index:5}@media (max-width:1199.98px){header{top:0}}header .navbar-brand{text-transform:uppercase;letter-spacing:.2em;font-weight:400}header .navbar-brand.absolute{position:absolute}@media (max-width:991.98px){header .navbar-brand.absolute{position:relative}}header .navbar{padding-top:0;padding-bottom:0;background:none!important;position:relative;font-family:\"Montserrat\",sans-serif}@media (max-width:1199.98px){header .navbar{background:#000!important;padding-top:.5rem;padding-bottom:.5rem}}header .navbar .nav-link{padding:1.7rem 1rem;outline:none!important;font-size:14px;text-transform:uppercase;letter-spacing:.2em}header .navbar .nav-link.active{color:#fff}@media (max-width:991.98px){.navbar-nav{display:inline;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}header .navbar .nav-link{padding:.5rem 0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gomasTres.7ab42d6.png";

/***/ }),
/* 42 */
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
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0e059cf0", content, true, context)
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("548016e2", content, true, context)
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("30252df6", content, true, context)
};

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_80ddc13c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_80ddc13c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_80ddc13c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_80ddc13c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_80ddc13c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_80ddc13c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".page-header-wrapper[data-v-80ddc13c]{padding-top:120px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:cover}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gomasDeg.4db1adb.png";

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body{font-weight:400;font-size:14px;line-height:24px;background:#f7f7f7;color:#6d6d6d;-webkit-font-smoothing:antialiased!important}body,h1,h2,h3,h4,h5,h6{font-family:\"Roboto\",sans-serif}h1,h2,h3,h4,h5,h6{margin:0 0 15px;color:#202020}h1{font-size:42px;font-weight:800;line-height:46px}h2{font-size:28px;line-height:34px}h2,h3{font-weight:700}h3{font-size:20px;line-height:22px}a{color:#fcbb3c;text-decoration:none;transition:all .3s ease 0s}a,a:active,a:focus{text-decoration:none!important;outline:none}a:focus,a:hover{color:#e89b04;text-decoration:none!important}img{width:100%}hr{border-top:1px solid #e3e3e3}@media(min-width:100px){.page-header-wrapper{min-height:350px}}.page-header{padding-bottom:0;margin:0;border-bottom:0}.page-header h1{color:#fff;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-position:2px 5px;padding-top:15px;margin:0}.breadcrumb{padding:7px 0 0;background-color:transparent}.breadcrumb>.active{color:#fff}.content-wrapper{position:relative;top:-120px;border:3px solid #e3e3e3;border-radius:5px;background:#fff;z-index:100}.inner-content{padding:60px}.margin-bottom-60{margin-bottom:60px}.owl-theme .owl-controls.clickable .owl-page:hover span,.owl-theme .owl-controls .owl-page.active span{background:#fcbb3c}.sidebar-wrapper .sidebar-tab ul li:before,.widget.widget_tag_cloud ul li:before{display:none}#filter{overflow:hidden;margin:15px 0 30px}#filter li{float:left;margin-bottom:10px;padding-right:.5rem}#filter li a{background:transparent;border:2px solid #e3e3e3;border-radius:3px;color:#6d6d6d;display:block;margin:0 5px 0 0;padding:3px 10px;cursor:pointer}#filter li a.active,#filter li a:hover{background:#fe7402;border:2px solid transparent;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAECAIAAABdt8vlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjBGNUY1RjIxRTQwMTFFQjhCNkQ4MDkxNkFEQ0VGMkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjBGNUY1RjMxRTQwMTFFQjhCNkQ4MDkxNkFEQ0VGMkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMEY1RjVGMDFFNDAxMUVCOEI2RDgwOTE2QURDRUYyQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMEY1RjVGMTFFNDAxMUVCOEI2RDgwOTE2QURDRUYyQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuBuVNgAAAAoSURBVHjaYmRiYmIgF3wrYmJj+EeeXvayO2TbS76LBxCMOppeACDAAI9wA9UJHFg5AAAAAElFTkSuQmCC"

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/recortado.d43907c.png";

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pruebas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pruebas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pruebas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pruebas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pruebas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pruebas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web);"]);
// Module
exports.push([module.i, "#containerCard{box-shadow:0 15px 30px 1px hsla(0,0%,50.2%,.31);background:hsla(0,0%,100%,.9);text-align:center;border-radius:5px;overflow:hidden;margin-left:1rem;height:19rem;width:30rem;margin-bottom:2rem}.product-details{position:relative;text-align:left;overflow:hidden;padding:30px;height:100%;float:left;width:40%}#container .product-details h1{font-family:\"Old Standard TT\",serif;display:inline-block;position:relative;font-size:34px;color:#344055;margin:0}#container .product-details h1:before{position:absolute;content:\"\";right:0;top:0;transform:translate(25px,-15px);font-family:\"Farsan\",cursive;display:inline-block;background:#ffa69e;border-radius:5px;font-size:14px;padding:5px;color:#fff;margin:0;-webkit-animation:chan-sh 6s ease infinite;animation:chan-sh 6s ease infinite}@-webkit-keyframes chan-sh{0%{content:\"free shipping\"}to{content:\"New\"}}@keyframes chan-sh{0%{content:\"free shipping\"}to{content:\"New\"}}.hint-star{display:inline-block;margin-left:.5em;color:gold;width:50%}#container .product-details>p{font-family:\"Farsan\",cursive;text-align:center;font-size:20px;color:#7d7d7d}.control{position:absolute;bottom:20%;left:22.8%}.btn{transform:translateY(0);transition:.3s linear;background:#49c608;border-radius:5px;position:relative;overflow:hidden;cursor:pointer;outline:none;border:none;color:#eee;padding:0;margin:0}.btn:hover{transform:translateY(-4px)}.btn span{font-family:\"Farsan\",cursive;transition:transform .3s;display:inline-block;padding:10px 20px;font-size:1.2em;margin:0}.btn .price,.shopping-cart{background:#333;border:0;margin:0}.btn .price{transform:translateX(-10%);padding-right:15px}.btn .shopping-cart{transform:translateX(-100%);position:absolute;background:#333;z-index:1;left:0;top:0}.btn .buy{z-index:3;font-weight:bolder}.btn:hover .price{transform:translateX(-110%)}.btn:hover .shopping-cart{transform:translateX(0)}.product-image{transition:all .3s ease-out;position:relative;overflow:hidden;height:100%;float:right;width:50%;display:inline-block}#container img,.info{width:100%;height:100%}.info{background:rgba(27,26,26,.9);font-family:\"Farsan\",cursive;transition:all .3s ease-out;transform:translateX(-100%);position:absolute;line-height:1.9;text-align:left;font-size:120%;cursor:no-drop;color:#fff;left:0;top:0}.info h2{text-align:center}.product-image:hover .info{transform:translateX(0)}.info ul li{transition:.3s ease}.info ul li:hover{transform:translateX(50px) scale(1.3)}.product-image:hover img{transition:all .3s ease-out;transform:scale(1.2)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pruebas.vue?vue&type=template&id=c50c40da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"containerCard"}},[_vm._ssrNode("<div class=\"product-details\"><h1>GuataUva</h1> <p class=\"information\">Traido de donde traen las mejores uvas de la legion uvera</p> <div class=\"control\"><button class=\"btn\"><span class=\"price\">15.000 x6 $</span> <span class=\"shopping-cart\"><i aria-hidden=\"true\" class=\"fa fa-shopping-cart\"></i></span> <span class=\"buy\">Comprar</span></button></div></div> <div class=\"product-image\"><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt> <div class=\"info\"><h2>The Description</h2> <ul><li><strong>Sun Needs: </strong>Full Sun</li> <li><strong>Soil Needs: </strong>Damp</li> <li><strong>Zones: </strong>9 - 11</li> <li><strong>Height: </strong>2 - 3 feet</li> <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li> <li><strong>Features: </strong>Tolerates heat</li></ul></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pruebas.vue?vue&type=template&id=c50c40da&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pruebas.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Pruebasvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Pruebas.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pruebasvue_type_script_lang_js_ = (Pruebasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pruebas.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pruebasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "64dbea7b"
  
)

/* harmony default export */ var Pruebas = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gomas/index.vue?vue&type=template&id=80ddc13c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navigation'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"st-content-inner\" data-v-80ddc13c>","</div>",[_vm._ssrNode("<section class=\"page-header-wrapper\" data-v-80ddc13c><div class=\"container\" data-v-80ddc13c><div class=\"row\" data-v-80ddc13c><div class=\"col-md-12\" data-v-80ddc13c><div class=\"page-header\" data-v-80ddc13c><h1 data-v-80ddc13c>Catalogo</h1></div> <ol class=\"breadcrumb\" data-v-80ddc13c><li data-v-80ddc13c><a href=\"#\" data-v-80ddc13c>Inicio</a></li> <li class=\"active\" data-v-80ddc13c>ㅤ/ㅤ</li> <li data-v-80ddc13c><a href=\"#\" data-v-80ddc13c>Catalogo</a></li> <li class=\"active\" data-v-80ddc13c>ㅤ/ㅤ</li> <li class=\"active\" data-v-80ddc13c>Gomitas</li></ol></div></div></div></section> "),_vm._ssrNode("<div class=\"container\" data-v-80ddc13c>","</div>",[_vm._ssrNode("<div class=\"content-wrapper\" data-v-80ddc13c>","</div>",[_vm._ssrNode("<div class=\"inner-content\" data-v-80ddc13c>","</div>",[_vm._ssrNode("<ul id=\"filter\" class=\"list-inline\" data-v-80ddc13c><li data-v-80ddc13c><a class=\"active\" data-v-80ddc13c>Todas las bebidas</a></li> <li data-v-80ddc13c><a data-v-80ddc13c>Aguardiente</a></li> <li data-v-80ddc13c><a data-v-80ddc13c>Margarita</a></li> <li data-v-80ddc13c><a data-v-80ddc13c>Vodka</a></li> <li data-v-80ddc13c><a data-v-80ddc13c>Ron</a></li></ul> "),_vm._ssrNode("<div class=\"row\" data-v-80ddc13c>","</div>",[_c('Pruebas'),_vm._ssrNode(" "),_c('Pruebas')],2)],2)])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/gomas/index.vue?vue&type=template&id=80ddc13c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gomas/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var gomasvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./pages/gomas/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_gomasvue_type_script_lang_js_ = (gomasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/gomas/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(59)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gomasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "80ddc13c",
  "f4238574"
  
)

/* harmony default export */ var gomas = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(42).default,Pruebas: __webpack_require__(73).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map