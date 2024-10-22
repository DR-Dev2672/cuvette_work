import React from 'react'

import imgHome from '../../assets/home.png'
import LogInNav from '../LogInNav'


function Interview() {
  return (
    <>
    <LogInNav/>

    
    <div className='sec relative'>
   
    <div className='horizontal-line'></div>
    <img src={imgHome} alt=""  className='absolute top-10' />
    <div className='vertical-line '></div>
    <button className='create-btn   bg-blue-500 hover:bg-blue-400  text-white font-sans font-extrabold text-2xl'>Create Interview</button>
    
    
    </div>
    
    
    
    
    </>
  )
}

export default Interview