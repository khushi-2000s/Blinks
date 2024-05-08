import React from 'react';
import service1 from './images/service1.webp'
import pro from './images/proandproplus.jpg'
import { Servicecard } from './Servicecard';
export const Service = () => {
  return (
    <>
       <div>
       <div style={{backgroundImage:`url(${service1})`,color:"white",backgroundPosition:"center",height:"100vh"}} className='container d-flex align-items-center'>
             
           <div className='p-2 text-center ms-5'>
               <p className='p1' >Are you Hungry?</p>
               <p className='p3'>Don't Wait !</p>
               <p className='p1'>Taste grest! Eating something delicious right now ...?</p>
           </div>
       </div>
       <div>{<Servicecard />}</div>
       <p className='fs-1 text-center'>Order Place</p>
       <div className='row ' style={{height:"40vh"}}>
        <div className="col-md-6" style={{backgroundImage:`url(${pro})`,color:"white",height:"40vh"}}>
            
        </div>
        <div className="col-md-6 pt-5" style={{height:"50vh"}}>
         
        <form class="row pt-2 g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden border" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose Dishe...</option>
      <option value="1">Salz Burg</option>
      <option value="2">Tum Tum Asia</option>
      <option value="3">Sri Udipi Park</option>
      <option value="3">The Bier Library</option>
      <option value="3">Magique</option>
    </select>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
      <label class="form-check-label" for="inlineFormCheck" >
        Confirm
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Order</button>
  </div>
</form>
        </div>
       </div>
       </div>
    </>
  )
}
