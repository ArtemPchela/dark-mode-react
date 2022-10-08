import React, {useEffect, useState} from 'react';

const Theme = ({darkIcon, lightIcon, altDark, altLight, size}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="theme_toggle" onClick={toggleTheme}>
      {theme === "dark"
        ? <img src={darkIcon} alt={altDark} style={{width: `${size}`}}/>
        : <img src={lightIcon} alt={altLight} style={{width: `${size}`}}/>
      }
    </div>
  );
};

export default Theme;
