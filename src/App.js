import "./App.css";

import { useRef } from "react";
import AppContext from "./AppContext";
import NavBar from "./components/NavBar.js";
import Details from "./pages/detailsPage/Details.js";
import Schedule from "./pages/schedulePage/Schedule.js";
import Separator from "./components/Separator.js";
import Dinner from "./pages/dinnerPage/Dinner.js";
import FAQ from "./pages/faqPage/FAQ.js";
import SourceCodeButton from "./components/SourceCodeButton";

function App() {
  const scheduleRef = useRef(null);
  const dinnerRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <AppContext.Provider value="English">
      <NavBar scheduleRef={scheduleRef} dinnerRef={dinnerRef} faqRef={faqRef} />
      <Details />
      <Schedule ref={scheduleRef} />
      <Separator />
      <Dinner ref={dinnerRef} />
      <Separator />
      <FAQ ref={faqRef} />
      <SourceCodeButton />
    </AppContext.Provider>
  );
}

export default App;
