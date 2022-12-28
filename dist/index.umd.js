(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/helpers/slicedToArray'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/helpers/slicedToArray', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["dark-mode-react"] = {}, global._slicedToArray, global.React));
})(this, (function (exports, _slicedToArray, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var Theme = function Theme(_ref) {
    var darkIcon = _ref.darkIcon,
        lightIcon = _ref.lightIcon,
        altDark = _ref.altDark,
        altLight = _ref.altLight,
        imgWidth = _ref.imgWidth,
        imgHeight = _ref.imgHeight,
        myClass = _ref.myClass;

    var _useState = React.useState(localStorage.getItem("theme")),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        theme = _useState2[0],
        setTheme = _useState2[1];

    var toggleTheme = function toggleTheme() {
      setTheme(theme === "light" ? "dark" : "light");
    };

    React.useEffect(function () {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: myClass,
      onClick: toggleTheme
    }, theme === "dark" ? /*#__PURE__*/React__default["default"].createElement("img", {
      src: darkIcon,
      alt: altDark,
      width: imgWidth,
      height: imgHeight
    }) : /*#__PURE__*/React__default["default"].createElement("img", {
      src: lightIcon,
      alt: altLight,
      width: imgWidth,
      height: imgHeight
    }));
  }; // export default Theme;

  exports.Theme = Theme;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
