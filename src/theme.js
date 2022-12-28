import React, { useEffect, useState } from 'react';

export const Theme = ({darkIcon, lightIcon, altDark, altLight, imgWidth, imgHeight, myClass}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={myClass} onClick={toggleTheme}>
      {theme === "dark"
        ? <img src={darkIcon} alt={altDark} width={imgWidth} height={imgHeight}/>
        : <img src={lightIcon} alt={altLight} width={imgWidth} height={imgHeight}/>
      }
    </div>
  );
};
