import React, { useState } from 'react';
import './App.css'
import Food from './Data.js'


export const Searching = () => {

  const [Name, setName] = useState("")

  return (
    <>
 <div className="container mt-4">
 
  <div className="display container-fluid ">
 <div className="col-2 pt-4 ">
     <h2 >Zonato</h2>
 </div>
   <div className=" col-6 ">
   <form >
      <input className="form-control me-2 shadow-lg p-3 " type="search" placeholder="Search for restaurants, cuisine and a dish" aria-label="Search"
      onChange={(e)=>{setName(e.target.value)}}/>
    </form>
   </div>
     
      
  </div>
<div className="container mt-4">
    <p>Home / India / Hyderabad / Hyderabad City / Indira Nagar / West Bengalore / Race Course Road / Order Online</p>
</div>




<div className="container d-flex flex-row">
    <div className='p-2 fs-4'>Delivery</div>
    <div className='p-2 fs-4'>Dinning</div>
    <div className='p-2 fs-4'>Night Life</div>
</div>

<div className="container">
  <div className="row justify-content-center">

   
   {Food.filter((food)=>{
     return Name.toLowerCase() === ""?food : food.caption.toLowerCase().includes(Name)
   }).map((food)=>{
       return(<>
      <div className="card col-3 pt-2 card" style={{width: "18rem",margin:"5px",}}>
        <img src={food.image} className="card-img-top" style={{}}alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{food.caption}</h5>
       <a href="/" className="btn btn-success">{food.price}</a>
      </div>
   </div>
      </>
       )
   })}
  
  {console.log(Food[0])}
  

</div>
</div>
  </div>
    </>
  )
}
