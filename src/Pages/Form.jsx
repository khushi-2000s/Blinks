import React, { useState } from 'react';
import back from '../Pages/images/login1.jpeg'

export default function Form() {

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState();
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
    const [err , seterr] = useState(false)  
  function getFormData(e){
            console.log(name,lastname,city,state,zip,address,address2)
            e.preventDefault()

            if(address2.length <= 0){
                 seterr(true)
            }
            else{
              seterr(false)
            }
  }

  function adderr(e){
      setAddress2(e.target.value)
  }

  function errhandler(e){
    let  item = e.target.value
    if(item.length < 3){
        setNameErr(true)
    }
   else{
      setNameErr(false)
   }
    setName(item)
  }
 
  return (
    <>
    <div className='conatiner-fluid pt-5' style={{backgroundImage:`url(${back})`,backgroundSize:"cover"}}>
     <header className='text-center mb-2'>
        <h2 className='display-6 mb-2 fw-bold'>Online Registration</h2>
     </header>
  
  <div className=' container p-5 rounded col-6' style={{backgroundColor:"rgba(0,0,0,0.5)",color:"white"}}>
     <form onSubmit={getFormData}>
     <div className="row g-3 ">
        <div className='mb-2 col-md-6'>
            <label htmlFor="name">name</label>
            <input type="text" className='form-control' placeholder='Name' onChange={errhandler} />{nameErr?"invalid information":""}
            </div>
            
        <div className='mb-2 col-md-6'>
            <label htmlFor="name">last name</label>
            <input type="text" className='form-control' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
            </div>


            <div className="mb-2 col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" onChange={(e)=>setCity(e.target.value)}/>
  </div>
  <div className="mb-2 col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" onChange={(e)=>setState(e.target.value)}>
      <option selected>Choose...</option>
      <option>delhi</option>
      <option>mumbai</option>
      <option>goa</option>
      <option>bihar</option>
    </select>
  </div>
  <div className="mb-2 col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" onChange={(e)=>setZip(e.target.value)}/>
  </div>


  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e)=>setAddress(e.target.value)}/>
  </div>
  <div className=" mb-4 col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={adderr}/>
    {err?"required":""}
  </div>



  <div className="d-grid gap-2 pb-2">
  <button className="btn btn-primary" type="submit" id='button'>Register</button>
  
</div>

    </div>

     
     </form>
</div>

    </div>
    
    </>
  )
}
