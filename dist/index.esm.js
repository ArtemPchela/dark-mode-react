import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useEffect } from 'react';

var Theme = function Theme(_ref) {
  var darkIcon = _ref.darkIcon,
      lightIcon = _ref.lightIcon,
      altDark = _ref.altDark,
      altLight = _ref.altLight,
      imgWidth = _ref.imgWidth,
      imgHeight = _ref.imgHeight,
      myClass = _ref.myClass;

  var _useState = useState(localStorage.getItem("theme")),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var toggleTheme = function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(function () {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return /*#__PURE__*/React.createElement("div", {
    className: myClass,
    onClick: toggleTheme
  }, theme === "dark" ? /*#__PURE__*/React.createElement("img", {
    src: darkIcon,
    alt: altDark,
    width: imgWidth,
    height: imgHeight
  }) : /*#__PURE__*/React.createElement("img", {
    src: lightIcon,
    alt: altLight,
    width: imgWidth,
    height: imgHeight
  }));
};

var ThemeLibrary = function ThemeLibrary() {
  return {
    Theme: Theme
  };
};

export { ThemeLibrary as default };
