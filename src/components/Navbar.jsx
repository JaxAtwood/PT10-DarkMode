import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
//useLocalStorage hooks into useDarkMode, which hooks into Navbar

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  //use of the custom hook [get, set]
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
