(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/BlogComp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_HeaderComp_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/HeaderComp.vue */ "./resources/js/components/partials/HeaderComp.vue");
/* harmony import */ var _partials_FooterComp_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/FooterComp.vue */ "./resources/js/components/partials/FooterComp.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HeaderComp: _partials_HeaderComp_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FooterComp: _partials_FooterComp_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "App",
  data: function data() {
    return {
      urlGet: "/api/posts",
      urlPut: "/api/posts/update/",
      postsData: [],
      lastPage: null,
      nowPage: null
    };
  },
  methods: {
    getApi: function getApi(page) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.urlGet, {
        params: {
          page: page
        }
      }).then(function (r) {
        console.log(r.data);
        _this.postsData = r.data.data;
        _this.lastPage = r.data.last_page;
        _this.nowPage = r.data.current_page;
      });
    },
    like: function like(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(this.urlPut + id).then(function (r) {
        console.log(r.data);
        _this2.postsData = r.data;

        _this2.getApi();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getApi(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=template&id=02893632&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/BlogComp.vue?vue&type=template&id=02893632& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("header-comp"), _vm._v(" "), _c("main", [_c("h1", [_vm._v("Posts")]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, _vm._l(_vm.postsData, function (post) {
    return _c("div", {
      key: post.id,
      staticClass: "card"
    }, [_c("h2", [_vm._v(_vm._s(post.title))]), _vm._v(" "), _c("div", {
      staticClass: "div"
    }, _vm._l(post.tags, function (tag) {
      return _c("span", {
        key: tag.id
      }, [_vm._v("\n                        " + _vm._s(tag.name) + "\n                        ")]);
    }), 0), _vm._v(" "), _c("p", {
      staticClass: "content"
    }, [_vm._v(_vm._s(post.content))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(post.likes))]), _vm._v(" "), _c("span", {
      staticClass: "likes",
      on: {
        click: function click($event) {
          return _vm.like(post.id);
        }
      }
    }, [_vm._v("❤")])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "pages"
  }, [_c("button", {
    attrs: {
      disabled: _vm.nowPage === 1
    },
    on: {
      click: function click($event) {
        return _vm.getApi(_vm.nowPage - 1);
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _vm._l(_vm.lastPage, function (i) {
    return _c("button", {
      key: i,
      staticClass: "minicards",
      "class": _vm.nowPage === i ? "active" : "",
      attrs: {
        disabled: _vm.nowPage === i
      },
      on: {
        click: function click($event) {
          return _vm.getApi(i);
        }
      }
    }, [_vm._v("\n                " + _vm._s(i) + "\n                ")]);
  }), _vm._v(" "), _c("button", {
    "class": _vm.nowPage === _vm.lastPage ? "active" : "",
    attrs: {
      disabled: _vm.nowPage === _vm.lastPage
    },
    on: {
      click: function click($event) {
        return _vm.getApi(_vm.nowPage + 1);
      }
    }
  }, [_vm._v("Next")]), _vm._v(" "), _c("button", {
    "class": _vm.nowPage === _vm.lastPage ? "active" : "",
    attrs: {
      disabled: _vm.nowPage === _vm.lastPage
    },
    on: {
      click: function click($event) {
        return _vm.getApi(_vm.lastPage);
      }
    }
  }, [_vm._v("Last page")])], 2)]), _vm._v(" "), _c("footer-comp")], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  color: black;\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.container .card {\n  margin: 20px 20px;\n  width: 250px;\n  padding: 20px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n}\n.container .card .content {\n  flex-grow: 1;\n}\n.container .card .likes {\n  font-size: 30px;\n  color: red;\n  cursor: pointer;\n}\n.container .card .likes:hover {\n  font-size: 40px;\n}\n.pages {\n  padding: 20px;\n}\n.pages button {\n  padding: 15px;\n  margin: 0 10px;\n  background-color: yellowgreen;\n  font-weight: bolder;\n  border-width: 0;\n}\n.pages button:hover, .pages button.active {\n  background-color: rgba(153, 205, 50, 0.413);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/pages/BlogComp.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/BlogComp.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogComp_vue_vue_type_template_id_02893632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogComp.vue?vue&type=template&id=02893632& */ "./resources/js/components/pages/BlogComp.vue?vue&type=template&id=02893632&");
/* harmony import */ var _BlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogComp.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/BlogComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BlogComp_vue_vue_type_style_index_0_id_02893632_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss& */ "./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogComp_vue_vue_type_template_id_02893632___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogComp_vue_vue_type_template_id_02893632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/BlogComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/BlogComp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/BlogComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_style_index_0_id_02893632_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=style&index=0&id=02893632&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_style_index_0_id_02893632_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_style_index_0_id_02893632_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_style_index_0_id_02893632_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_style_index_0_id_02893632_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/BlogComp.vue?vue&type=template&id=02893632&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/BlogComp.vue?vue&type=template&id=02893632& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_template_id_02893632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComp.vue?vue&type=template&id=02893632& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/BlogComp.vue?vue&type=template&id=02893632&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_template_id_02893632___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComp_vue_vue_type_template_id_02893632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);