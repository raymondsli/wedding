import { createContext } from "react";

const AppContext = createContext({
  isMobile: false,
  language: "English",
  setLanguage: (language) => {},
});

export default AppContext;
