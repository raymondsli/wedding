import "./App.css";
import NavBar from "./components/NavBar.js";
import Seperator from "./components/Seperator.js";
import Details from "./pages/detailsPage/Details.js";
import Schedule from "./pages/schedulePage/Schedule.js";
import Dinner from "./pages/dinnerPage/Dinner.js";
import FAQ from "./pages/faqPage/FAQ.js";
import { useRef } from "react";

function App() {
  const scheduleRef = useRef(null);
  const dinnerRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <div>
      <NavBar scheduleRef={scheduleRef} dinnerRef={dinnerRef} faqRef={faqRef} />
      <Details />
      <Schedule ref={scheduleRef} />
      <Seperator />
      <Dinner ref={dinnerRef} />
      <Seperator />
      <FAQ ref={faqRef} />
    </div>
  );
}

export default App;
