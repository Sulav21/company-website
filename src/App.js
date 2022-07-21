import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Services } from "./components/Services";
import { Container, Row, Col } from "react-bootstrap";
import { Projects } from "./components/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Slider } from "./components/slider/Slider";
const App = () => {
  return (
    <>
      <NavBar />
      
      <div className="home mb-3">
        <Home />
      </div>

      <br />

      <div className=" mt-4">
        <Services />
      </div>
<div>
  <Slider/>
</div>
      <div className=" mt-4">
       <Projects/>
      </div>
      <div className=" mt-4">
        <Contact />
      </div>
      
       <Footer/>
      
    </>
  );
};

export default App;
