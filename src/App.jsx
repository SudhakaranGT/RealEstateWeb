import Header from "../Components/Header/header";
import Home from "../Components/Home/home";
import Companies from "../Components/Companies/companies";
import "./App.css";
import Residencies from "../Components/Residencies/residencies";

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
    </div>
  );
}

export default App;
