import "./App.css";
import NavBar from "./components/NavBar.js";
import Seperator from "./components/Seperator.js";
import Details from "./pages/detailsPage/Details.js";
import Schedule from "./pages/schedulePage/Schedule.js";
import Dinner from "./pages/dinnerPage/Dinner.js";
import FAQ from "./pages/faqPage/FAQ.js";

function App() {
  return (
    <div>
      <NavBar />
      <Details />
      <Schedule />
      <Seperator />
      <Dinner />
      <Seperator />
      <FAQ />
    </div>
  );
}

export default App;
