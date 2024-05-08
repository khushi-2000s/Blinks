
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Searching } from './Pages/Searching';
import { Home } from './Pages/Home';
import {Form} from './Pages/Form';
import { Service } from './Pages/Service';
import { Nav } from './Pages/Nav';


export default function App(){

 const data =[{des:"service/order online"},
              {des:"service/dinning out"},
              {des:"service/Night Life and Clubs"},
              {des:"service/pro and pro plus"},
              {des:"Caesar Salad"},
              {des:"Leafy Green Salad"},
              {des:"Greek Salad"},
              {des:"Wedge Salad"},
              {des:"menu"},
            ]

    return(
        <>
           <BrowserRouter>
    <Nav />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='login' element={<Form />}/>
      <Route path='service' element={<Service />}/>
           
      {data.map((element)=>{
        return <Route path={element.des} element={<Searching/>}/>
      })}
     </Routes>
     </BrowserRouter>

     
        </>
    )
}