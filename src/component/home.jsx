import React ,{lazy} from "react";
import Swiper from "./swipper";
import Poster from "./poster";
import Poster_2 from "./poster2";
import Poster_3 from "./poster_3";
import Footer from "./footer";

// const Footer = lazy(() => import('./footer'));
// const Poster =lazy ( ()=> import('./poster'));
// const Swiper =lazy ( ()=> import ("./swipper"));
// const Poster_2 =lazy ( ()=> import ('./poster2'));
// const Poster_3 =lazy ( ()=> import ('./poster_3'));


const Home = () => 

 {
return(
<div>

       <Swiper />
       <Poster />    
       <Poster_2 />
       <Poster_3 />
       <Footer />
</div>


);

}
export default Home;