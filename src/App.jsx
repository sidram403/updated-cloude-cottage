import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cottage1 from "./pages/Cottage1";
import Cottage2 from "./pages/Cottage2";
import Cottage3 from "./pages/Cottage3";
import Cottage4 from "./pages/Cottage4";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import ThingsToDo from "./pages/ThingsToDo";
import Privacy from "./pages/Privacy";
import TermsAndCondition from "./pages/TermsAndCondition";
import ScrollToTop from "./utils/scrollTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cottage1" element={<Cottage1 />} />
          <Route path="/cottage2" element={<Cottage2 />} />
          <Route path="/cottage3" element={<Cottage3 />} />
          <Route path="/cottage4" element={<Cottage4 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/thingstodo" element={<ThingsToDo />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsandcondition" element={<TermsAndCondition />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
