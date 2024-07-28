import React from 'react'
import { roomtypeData } from '../roomtype';

const Roomtype = () => {
  return (
    <div className='bg-red-400 mt-96'>
        {roomtypeData.map((val,i)=>{
<h1 key={i}>{val.name}</h1>



        })}
    </div>
  )
}

export default Roomtype