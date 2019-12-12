import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [newValue, setValue] = useLocalStorage("dark-mode");
  //setValue is hooked into setStoredValue from useLocalStorage
  //this, essentially, IS the hook

  React.useEffect(() => {
    const body = window.document.body;
    //window (global) is an object in DOM, Document (main, visible object) is a property os the window object, body returns the body element- all has to do with DOM manipulation
    if (newValue) {
      //if (condition) if true, "newValue" manipulate the DOM to add a dark-mode class
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      //if condition is false, remove the class-list of dark-mode
    }
  }, [newValue]);
  //subscribtion of newValue in our useEffect
  //still struggling to understand this but here: https://reactjs.org/docs/hooks-effect.html (about 3/4 down the page)
  //this tells it to re-run if and only if newValue changes?

  return [newValue, setValue];
};

//this file is the custom hook, imported into NavBar
//useEffect is a hook that is predefined, functions (take in a param) & that return some functionality for our component
//ties into the lifecycle methods or to create state
