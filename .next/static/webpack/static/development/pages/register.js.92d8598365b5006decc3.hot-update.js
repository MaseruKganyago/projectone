webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./pages/register/index.tsx":
/*!**********************************!*\
  !*** ./pages/register/index.tsx ***!
  \**********************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ "./pages/register/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form/FormItem */ "./node_modules/antd/lib/form/FormItem.js");
/* harmony import */ var antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var restful_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! restful-react */ "./node_modules/restful-react/dist/restful-react.esm.js");













;
var base = "https://localhost:44352/api/Account";
var Register = function Register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
      confirm = _useState6[0],
      setConfirm = _useState6[1];

  var handleSubmit = function handleSubmit() {
    console.log({
      email: email,
      password: password,
      confirm: confirm
    });

    var _useMutate = Object(restful_react__WEBPACK_IMPORTED_MODULE_12__["useMutate"])({
      verb: "POST",
      path: "/Register",
      base: base
    }),
        Register = _useMutate.mutate;

    Register({
      email: email,
      password: password,
      confirm: confirm
    }).then(function (data) {
      return console.log(data);
    }).catch(function (err) {
      return console.log(err.data);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "register"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "base-container"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "header"
  }, "TransportWise"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "header2"
  }, "Register here:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "image"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
    src: "/static/images/town.png"
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    label: "Email:"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    prefix: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "mail"
    }),
    placeholder: "Enter Email",
    required: true,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    label: "Password:"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    autoComplete: "on",
    prefix: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "lock"
    }),
    placeholder: "Password",
    required: true,
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    label: "Confir"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    autoComplete: "on",
    prefix: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "lock"
    }),
    placeholder: "Confirm Password",
    required: true,
    type: "password",
    value: confirm,
    onChange: function onChange(e) {
      return setConfirm(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: "un-authed-btn-container"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button",
    block: true
  }, "Register")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "custom-form-item"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
    href: "/lofin"
  }, "or Login")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

})
//# sourceMappingURL=register.js.92d8598365b5006decc3.hot-update.js.map