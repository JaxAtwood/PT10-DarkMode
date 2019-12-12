import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //useLocalStorage us an API that takes in an intitialValue and a key as params
  //initialValue is the default value or value if there is no value
  //initialValue can be a primitive type or a cback function
  //if it's a cback, whatever happens to return when the func is called that is considered the initial value
  //******
  //localStorage is important for when you need to persist some kind of data. Will be useful when we do authentication. Will store tokens in localStorage to verify protectedRoutes
  //******
  const [storedValue, setStoredValue] = useState(() => {
    //useState hook, [get, set];
    const item = window.localStorage.getItem(key);
    //item is equal to window(the browser window in DOM, supports all browsers)
    
    //getter, getItem only needs a key
    return item ? JSON.parse(item) : initialValue;
    //this line says if item is true(JSON change string to an object)
    //else if false, return initialValue
  });

  const setValue = newValue => {
    //setValue is the custom setter, value is the new value being set
    setStoredValue(newValue);
    //then it is passed through the function call
    //when we want to pass values, we use parameters in our functions/function calls
    window.localStorage.setItem(key, JSON.stringify(newValue));
    //setter, setItem requires a key and a value
    //JSON change object to a string
  };

  return [storedValue, setValue];
  //first index of this array being the value (storedValue) and the index is the setter (setValue)
  //with destructuring of useState, the position within the return that defines it's value
  //in this return, setStoredValue is now setValue
  //so now when we pass in the useLocalStorage hook, and use setValue in the useLocalStorage, it is really the value of setValue
};

//helpful article: https://www.robinwieruch.de/local-storage-react
