import { createContext } from "react";

const AppContext = createContext({
  language: "English",
  setLanguage: (language) => {},
});

export default AppContext;
