import React from 'react';
import './App.css'
import img1 from './images/banner1.jpg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
// import { Nav } from './Nav';

export const Slider = () => {
  return (
    <>
   <div className='header' style={{height:"100vh",overflow:"hidden"}}>

        <div>
          {/* <Nav /> */}
        </div>
      
   <div id="carouselExampleDark" className="carousel carousel-dark slide position-relative " data-bs-ride="carousel">
  
  <div className="carousel-inner header">
    <div className="carousel-item active " data-bs-interval="2000">
      <img src={img1} className="d-block w-100" alt="..." style={{width:"200px", height:"800px",objectFit:"cover"}}/>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img2} className="d-block w-100" alt="..." style={{width:"200px", height:"800px",objectFit:"cover"}}/>
      
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." style={{width:"200px", height:"800px",objectFit:"cover"}}/>
      
   </div>
   <div className="carousel-caption  position-absolute bottom-50 start-10 " style={{color:"white"}}>
        <p  className=' fw-bolder p5'>Zonato</p>
        <p className="text-center lh-sm back p3">Find The Best Restaurants, Cafes <br></br> and Bar in India.</p>
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>
    </>
  )
}
