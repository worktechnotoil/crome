import React from 'react'
import { gr } from '../../data';
import './BlueCard.css'

const BlueCard = () => {
  return (
    <>
    <div className='blue-body'>
    <div className='gr-al'>
        <h1 style={{color:'white'}}>The TATA Advantage</h1>
   {
       gr.map((cur, index) =>
       
       <img className="image_gr" src={cur} alt="" key={index.toString()}/>
      
       )
   }
    
    </div>

    </div>
    </>
  )
}

export default BlueCard;