import React from 'react'


export const About = () => {
  const Places = ["Agra" ,"Ahemdabad" , "Bengaluru" , "Bhopal" ,"Chennai", "Cuttack" , "Delhi NCR" , "Dehradun" , "Goa" , "Guntur" , "Haridwar", "Indore"]
  return (
   <>
    <div className="container">
        <div className="d-flex flex-column justify-content-center mb-3" style={{color:"gray"}}>
          <p className="text-center mb-5 p3" >Popular locations in India</p>
          <p className="text-center p1">From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
        </div>

        <div className="container row justify-content-center">
          
         {Places.map((places) => {
         return (<>
         
            <div style={{width:"22rem",height:"4rem",color:"gray"}} className="col-md-4 border border-2 rounded-4 m-2 d-flex justify-content-center align-items-center">{places } &#10148;</div>
         
         </>)
         })}
         
        </div>
    </div>
   </>
  )
}
