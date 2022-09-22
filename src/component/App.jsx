import React  from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import Topoffer from "./top offer";
import Home from "./home";

// const Topoffer= lazy(() => import('./top offer'));
// const Home = lazy(() => import('./home'));

const App = () =>
{ 
    return (
     <div>

     <Router>
      <Routes>
      <Route  path="/" element={<Home/>} exact> </Route>
      {/* <Route  path="topoffer" element={<Topoffer/>} exact> </Route> */}

       </Routes>
       </Router>
    </div>
 );
    
    
}

export default App;