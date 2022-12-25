import Navbar from "./componenets/Navbar/Navbar";
import "./App.css";
import { useSelector } from "react-redux";
import Intro from "./componenets/Intro/Intro";
import Services from "./componenets/Services/Services";
import Works from "./componenets/Works/Works";
import Portfolio from "./componenets/Portfolio/Portfolio";
import Contact from "./componenets/Contact/Contact";
import Footer from "./componenets/Footer/Footer";
function App() {
  const {mode}=useSelector((state)=>state.darkMode);
  return (
    <div
      className="App"
      style={{
        background: mode ? "black" : "white",
        color: mode ? "white" : "",
      }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;