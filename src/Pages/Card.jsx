import React from 'react'
import { Link } from 'react-router-dom'
// import order from './images/orderonline.jpg'
// import dinner from './images/diningout.jpg'
// import night from './images/nightlifeandclubs.jpg'
// import plus from './images/proandproplus.jpg'
import './App.css'

export const Card = () => {

  const  user =[
    {
        img:"https://images.pexels.com/photos/2126576/pexels-photo-2126576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title:"Caesar Salad"
    },
    {
        img:"https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title:"Leafy Green Salad"
    },
    {
        img:"https://images.pexels.com/photos/3490367/pexels-photo-3490367.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title:"Greek Salad"
    },
    {
        img:"https://images.pexels.com/photos/3297804/pexels-photo-3297804.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title:"Wedge Salad"
    }
]
return (
<>
<div>
<div className="container d-flex justify-content-center flex-wrap p-5 gap-3 ">
{user.map((item) =>{
    return (<>
     <Link to={item.title} className="text-decoration-none">  
         <div className="card big" style={{width: "18rem"}}>
<img src={item.img} className="card-img-top" alt="..."/>
<div className="card-body">
<p className="card-title text-center">{item.title}</p>
</div>
</div>
</Link>          
    </>)
})}
</div>
</div>
</>
)


//   return (
//     <>
//    <div className="container d-flex flex-row bg-dark justify-content-center flex-wrap p-5 gap-3 ">

// <Link to="online" className="text-decoration-none">
//     <div className="card big" style={{width: "18rem"}}>
//   <img src={order} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <p className="card-title text-center">order online</p>
//   </div>
// </div>
// </Link>

// <Link to="dinning" className="text-decoration-none">
//     <div className="card big" style={{width: "18rem"}}>
//   <img src={night} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <p className="card-title text-center">Dinning Out</p>
//   </div>
// </div>
// </Link>

// <Link to="nightlife" className="text-decoration-none">
//     <div className="card big" style={{width: "18rem"}}>
//   <img src={plus} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <p className="card-title text-center">Night Life and Clubs</p>
//   </div>
// </div>
// </Link>

// <Link to="pro" className="text-decoration-none">
//     <div className="card big" style={{width: "18rem"}}>
//   <img src={dinner} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <p className="card-title text-center">Pro and Pro Plus</p>
//   </div>
// </div>
// </Link>

// </div>
//     </>
//   )
}
