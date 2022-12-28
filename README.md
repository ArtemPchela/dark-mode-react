# dark-mode-react

[![Npm package version](https://badgen.net/npm/v/dark-mode-react)](https://npmjs.com/package/dark-mode-react)
[![Npm package total downloads](https://badgen.net/npm/dt/dark-mode-react)](https://npmjs.com/package/dark-mode-react)
[![Npm package daily downloads](https://badgen.net/npm/dw/dark-mode-react)](https://npmjs.com/package/dark-mode-react)
[![Npm package daily downloads](https://badgen.net/npm/dd/dark-mode-react)](https://npmjs.com/package/dark-mode-react)
[![Npm package license](https://badgen.net/license/lodash)](https://npmjs.com/package/dark-mode-react)

> NOTE: react dark mode based on "react": "^18.2.0" and "react-dom": "^18.2.0".
> The user setting persists to `localStorage`.

### dark-mode-react:

<ul>
    <li>a minimal lightweight component for your React projects.</li>
    <li>quickly setup</li>
    <li>has a small bundle size and zero dependencies</li>
    <li>you have total control with styles - css, scss, sass, tailwind ui.</li>
    <li style="color: red">Doesn't support Vite and TS</li>
</ul>

Don't forget about ⭐ [GitHub](https://github.com/ArtemPchela/dark-mode-react)

```jsx
import React from 'react';
import {Theme} from "dark-mode-react";
import yourDarkImage from './path/to/your/DarkImage.png'
import yourLightImage from './path/to/your/LightImage.png'

const NameYourComponent = () => {
  return (
    <div>
      <Theme
        darkIcon={yourDarkImage}
        lightIcon={yourLightImage}
        altDark='dark icon'
        altLight="light icon"
        imgWidth='50'
        imgHeight='50'
        myClass="your-class_name"
      />
    </div>
  )
};
```

A React theme component accepts the following props:

| Key         | Type   | Description                                                          |
|:------------|:-------|:---------------------------------------------------------------------|
| `darkIcon`  | -      | Work with .png, .jpg, .svg<sup>*</sup> extensions.                   |
| `lightIcon` | -      | Work with .png, .jpg, .svg<sup>*</sup> extensions.                   |
| `altDark`   | string | For better accessibility.                                            |
| `altLight`  | string | For better accessibility.                                            |
| `imgWidth`    | string | Width for your icon.                                                 |
| `imgHeight`   | string | Height for your icon.                                                |
| `myClass`   | string | If you want to have background or add hover effect for icon wrapper. |

<sup>*</sup> - Don't **forget**, **svg** has width and height by **default**.

## Add your global styles. Example:

```css
:root {
  --background-color: #007aff;
  --color-text: white;
}

[data-theme='light'] {
  --background-color: #227d2c;
  --color-text: black
}

body {
  background: var(--background-color);
  color: var(--color-text);
}
```

## Installation

```sh
$ npm i dark-mode-react
```

