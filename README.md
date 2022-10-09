# dark-mode-react

> NOTE: react dark mode based on "react": "^18.2.0" and "react-dom": "^18.2.0".
> The user setting persists to `localStorage`.

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
        size='5rem'
      />
    </div>
  )
};
```

## Add your global styles. Example:

```css
:root {
  --background-color: #007aff;
  --color-text: white;
}

[data-theme='light'] {
  --background: #227d2c;
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

A `darkMode` object is returned with the following properties.

| Key         | Description                            |
| :---------- |:---------------------------------------|
| `darkIcon`  | Image with .png .jpg. jpeg extensions. |
| `lightIcon`  | Image with .png .jpg. jpeg extensions. |
| `altDark` | Type string, required.                 |
| `altLight` | Type string, required.                 |
| `size`  | Type string. Size for your icon.       |
