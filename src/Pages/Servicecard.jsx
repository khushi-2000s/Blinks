import React from 'react';
import { Link } from 'react-router-dom';



export const Servicecard = () => {
  const  user =[
        {
            img:"https://images.pexels.com/photos/970106/pexels-photo-970106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"order online"
        },
        {
            img:"https://images.pexels.com/photos/792028/pexels-photo-792028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Dinning Out"
        },
        {
            img:"https://images.pexels.com/photos/792026/pexels-photo-792026.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Night Life and Clubs"
        },
        {
            img:"https://images.pexels.com/photos/9501556/pexels-photo-9501556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Pro and Pro Plus"
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
}
