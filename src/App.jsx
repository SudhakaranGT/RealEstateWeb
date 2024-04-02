import Header from "../Components/Header/header";
import Home from "../Components/Home/home";
import Companies from "../Components/Companies/companies";
import "./App.css";
import Residencies from "../Components/Residencies/residencies";
import Value from "../Components/Value/value";
import Contact from "../Components/Contact/contact";
import GetStarted from "../Components/GetStart/getstart";
import Footer from "../Components/Footer/footer";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-grad"/>
        <Header/>
        <Home/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
