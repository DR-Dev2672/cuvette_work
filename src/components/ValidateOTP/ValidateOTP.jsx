import React from 'react'
import  img from '../../assets/navbar.png'
import imgPer from '../../assets/personicon.png'
import imgvector from '../../assets/vector.png'
import imgvect from '../../assets/vector.png'
import imggroups from '../../assets/groups.png'
import imgmail from '../../assets/mail.png'
import imgCheckCircle from '../../assets/check_circle.png'

function ValidateOTP() {
  return (
    <>

    <nav className=''>
    
     <img src={img} alt="nav_logo" />
    
    </nav>

   
    <div className="container  flex flex-row" >
    
    <div className="left w-1/2 flex ">
        <p className="lefttext" >Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
    </div>
       <div className="right  w-1/2 ">
              <div className='form border-2 border-blue-400 rounded-lg ml-20'>   
                <form action="/" target='' className='flex flex-col '>
                <h1 className=' text-center SignUp font-sans text-xl font-medium'>Sign Up</h1>
                <p className='text-center'>Lorem Ipsum is simply dummy text</p>

                <div className="input-container  relative my-0">
                  <img className='icon ' src={imgmail} alt=""/>
                  <input type="email" placeholder='Email OTP'className=' ' />
                  <img src={imgCheckCircle} className="iconcheck" alt="imagecheck" />
                  </div>
                  <br />
                
                <div className="input-container  relative my-0">
                  <img className='icon ' src={imgvector} alt=""/>
                  <input type="tel" placeholder='Mobile OTP'className='' />
                  <img src={imgCheckCircle} className="iconcheck" alt="imagecheck" />
                  </div>
                
                
                
                </form>
                </div>

   
    </div>
    </div>
   
    
    </>
  )
}

export default ValidateOTP