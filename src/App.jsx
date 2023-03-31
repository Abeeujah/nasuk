import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import Home from "./routes/home/home.route";
import Contact from "./routes/contact/contact.route";
import About from "./routes/about/about.route";
import Properties from "./routes/properties/properties.route";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ScrollTop from "./utils/scroll-top.component";

function App() {
  return (
    <div>
      <NavigationBar />
      <ScrollTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
        </Routes>
      </ScrollTop>
      <Footer />
    </div>
  );
}

export default App;
