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
        width={50}
        height={50}
        className="your-class_name"
      />
    </div>
  )
};
```

A React theme component accepts the following props:

| Key         | Description                                                                       |
|:------------|:----------------------------------------------------------------------------------|
| `darkIcon`  | Image with .png, .jpg, .svg<sup>*</sup> extensions.                               |
| `lightIcon` | Image with .png, .jpg, .svg<sup>*</sup> extensions.                                           |
| `altDark`   | Type string, required.                                                            |
| `altLight`  | Type string, required.                                                            |
| `width`     | Type number. Width for your icon.                                                 |
| `height`    | Type number. Height for your icon.                                                |
| `myClass`   | Type String. If you want to have background or add hover effect for icon wrapper. |

<sup>*</sup> - Don't **forget**, **svg** has width and height by **default**.

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

