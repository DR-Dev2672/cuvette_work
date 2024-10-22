import React from 'react'
import imgCuvette from '../assets/cuvette.png'
import imgContact from '../assets/contact.png'
import imgPolygon from '../assets/polygon.png'
import imgEllipse from '../assets/ellipse.png'
import imgHome from '../assets/home.png'

function LogInNav() {
  return (
    <>
    <div className="nav  flex flex-row">
      
        <img src={imgCuvette} alt="" className='cuvette_img block ' />
        
        <div className="contact_text ">
            <p>Contact</p>
            
        </div>
        <div className=' profile flex flex-row '>
          <img src={imgEllipse} alt="" className='ellipse m-auto'/>
          <p className='m-auto'>Your Name</p>
          <img src={imgPolygon} alt="" className='polygon m-auto' />
        </div>

    
    </div>

    <div className='sec relative'>
            <div className='horizontal-line'></div>
            <img src={imgHome} alt=""  className='absolute top-20' />
            <div className='vertical-line '></div>
    </div>
    </>
  )
}

export default LogInNav