import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const ContextGlobal = createContext(undefined);

const theme = {
  dark: {
    t: false,
  },
  light: {
    t: true,
  },
};

const initState = theme.light;
const initStateApi = [];

function reducer(state, action) {
  switch (action.type) {
    case "SWITCH_DARK":
      return theme.dark;
    case "SWITCH_LIGHT":
      return theme.light;
    default:
      throw new Error();
  }
}

const apiReducer = (state, action) => {
  switch (action.type) {
    case "GET_API":
      return action.payload;
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const [stateTheme, dispatchTheme] = useReducer(reducer, initState);
  const [apiState, dispatchApi] = useReducer(apiReducer, initStateApi);

  const [arr, setArr] = useState([]);
  let existArr = localStorage.getItem("arr") ? true : localStorage.setItem("arr", JSON.stringify(arr));

  useEffect(() => {
    const data = JSON.parse(existArr);
    setArr(data);
  }, [existArr]);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatchApi({ type: 'GET_API', payload: data }))

  }, []);

  const addToFavorites = (dentist) => {
    const array = JSON.parse(localStorage.getItem("arr")) || [];
    const existsDentist = array.find((elemento) => elemento.id === dentist.id);
    if (!existsDentist) {
      array.push(dentist);
      localStorage.setItem("arr", JSON.stringify(array));
      setArr(array);
    }
  };

  return (
    <ContextGlobal.Provider
      value={{ apiState, arr, setArr, stateTheme, dispatchTheme, addToFavorites }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};