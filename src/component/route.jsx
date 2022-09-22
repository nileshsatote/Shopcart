import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Nav from "./nav";
import Topoffer from "./top offer";
import Grocery from "./grocery";
import Cart from "./cart";

const Routeing = () =>
{
return(
    <div>
        <Router>
        <Nav />
        <Routes><Route path="/top Offer" element={<Topoffer />} exact/>
        <Route path="/grocery" element={<Grocery />} exact/>
        <Route path="/cart" element={<Cart />} exact/>
        </Routes> 
        
        </Router>
    </div>
);
}
export default Routeing;