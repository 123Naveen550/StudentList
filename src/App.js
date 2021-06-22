import Home from "./Components/Home";
import Addpage from "./Components/Addpage";
import Edit from "./Components/Edit"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">        
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/Addpage" exact component={Addpage} />
          <Route  path="/Edit/:id"  exact component={Edit} />
        </Switch>      
    </div>
    </BrowserRouter>
    
  );
}

export default App;