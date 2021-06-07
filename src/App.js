import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Addpage from "./Components/Addpage";
import Edit from "./Components/Edit"

function App() {
  return (
    
      <div className="App">
      <Home></Home>
      <Addpage></Addpage>
      <Edit></Edit>
      </div>
  );
}

export default App;
