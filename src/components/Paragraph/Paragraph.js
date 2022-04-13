import React from 'react'
import { para } from '../../data';

const Paragraph = () => {
  return (
    <>
    {
        para.map((curE, ind) =>
            
            <p style={{color:'rgb(255, 255, 255)', lineHeight:'25px'}} key={ind.toString()}>
                {curE.dis}
            </p>
        )
    }
   
    <p>

    </p>
    </>
  )
}

export default Paragraph;