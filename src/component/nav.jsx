import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () =>
{
 return(
<nav>
<div className="icon">

    <a className="navbar-brand" href="/">
<img src="favicon/favicon-16x16.png"/>
    Shopcart</a>
</div>
<div className="home">
<NavLink to="/">
<img className="img3" src="slideimg/home.jpg" alt="1" />
<h6>Home</h6>
</NavLink>
</div>

<div className="offer">
<NavLink to="/Top offer">
<img className="img3" src="slideimg/4 (1).jpg" alt="1" />
<h6>Top Offer</h6>
</NavLink>
</div>

<div className="grocery">
<NavLink to="/Grocery">
<img className="img3" src="slideimg/4 (5).jpg" alt="1" />
<h6>Grocery</h6>
</NavLink>
</div>

<div className="mobile">

<NavLink to="/Mobile">
<img className="img3" src="slideimg/4 (7).jpg" alt="1" />
<h6>Mobile</h6>
</NavLink>
</div>

<div className="fashion">
<NavLink to="/Fashion">
<img className="img3" src="slideimg/4 (4).jpg" alt="1" />
<h6>Fashion</h6>
</NavLink>
</div>

<div className="appliances">
<NavLink to="/Appliances">
<img className="img3" src="slideimg/4 (6).jpg" alt="1" />
<h6>Appliances</h6>
</NavLink>
</div>

<div className="home">
<NavLink to="/Home iteam">
<img className="img3" src="slideimg/4 (3).jpg" alt="1" />
<h6>Home Iteam</h6>
</NavLink>
</div>

<div className="beauty">
<NavLink to="/Beauty">
<img className="img3" src="slideimg/4 (2).jpg" alt="1" />
<h6>Beauty</h6>
</NavLink>
</div>

<div className="offer">
<NavLink to="/cart">
<img className="img3" src="slideimg/CART.jpg" alt="1" />
<h6>Cart</h6>
</NavLink>
</div>


<div className="search">

<form className="">
        <input className="abc" type="search" placeholder="What You Want " aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form> 
</div>
    



</nav>



 );
}
export default Nav;