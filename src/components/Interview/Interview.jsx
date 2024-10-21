import React from 'react'
import imgCuvette from '../../assets/cuvette.png'
import imgContact from '../../assets/contact.png'

function Interview() {
  return (
    <>
    <div className="nav">
      
        <img src={imgCuvette} alt="" className='cuvette_img block ' />
        
        <div className="contact_text blo">
            <p>Contact</p>
        </div>
    
    </div>
    <div className='sec'>
   
    <div className='horizontal-line'></div>
    <hr className='vertical-line'/>
    
    </div>
    
    
    
    
    </>
  )
}

export default Interview