import React from 'react'
import imgCuvette from '../assets/cuvette.png'
import imgContact from '../assets/contact.png'
import imgPolygon from '../assets/polygon.png'
import imgEllipse from '../assets/ellipse.png'
function LogInNav() {
  return (
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
  )
}

export default LogInNav