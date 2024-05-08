import React from 'react';
import { Card } from './Card';
import './App.css'
// import back from './images/banner1.jpg'

import { About } from './About';
// import { Link} from 'react-router-dom';
import { Slider } from './Slider';


export const Home = () => {
  return (
    <> 
  
       {/*<div className="pt-3" style={{backgroundImage:`url(${back})`,color:"white",backgroundSize:"cover"}}>
        
       <div className=" container d-flex mb-3 header">
  <div className="me-auto p-2 header">Get The App</div>
  <div className="p-2">Add restaurant</div>
  <div className="p-2" >Sign up </div>
  <Link to="login" className="text-decoration-none p-2"><div style={{color:"white"}}>Log in</div></Link>
  <div className="p-2" >menu </div>
</div>
       <div className=" d-flex flex-column justify-content-center align-items-center" style={{height:"100vh",width:"100%"}}>
            <p className=" lh-sm " style={{fontSize:"5rem",fontWeight:"bolder"}}>Zonato</p>
            <p className="text-center lh-sm back" >Find the best restaurants, cafés <br></br>and bars in India</p>
            </div>
       </div> */}
       <Slider />
       <Card />
       <About />
    </>

  )
}
