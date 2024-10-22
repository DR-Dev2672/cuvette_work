import React from 'react'
import  img from '../../assets/navbar.png'
import imgPer from '../../assets/personicon.png'
import imgvector from '../../assets/vector.png'
import imgvect from '../../assets/vector.png'
import imggroups from '../../assets/groups.png'
import imgmail from '../../assets/mail.png'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>

    <nav className=''>
    
     <img src={img} alt="nav_logo" />
    
    </nav>

   
    <div className="container  flex flex-row" >
    
    <div className="left relative w-1/2  ">
        <p className="lefttext" >Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
    </div>
       <div className="right  w-1/2 ">
              <div className='form_size border-2 border-blue-400 rounded-lg '>   
                <form action="/verify" target='' className=''>
                <h1 className=' text-center SignUp font-sans text-xl font-medium'>Sign Up</h1>
                <p className='text-center'>Lorem Ipsum is simply dummy text</p>
                <div className="input-container  relative">
                  <img className='icon  ' src={imgPer} alt=""/>
                  <input type="name"  className=' ' placeholder='Name' />
                </div>
                <div className="input-container  relative">
                  <img className='icon ' src={imgvector} alt=""/>
                  <input type="tel" placeholder='Phone no.'className='' />
                  </div>
                <div className="input-container  relative">
                  <img className='icon ' src={imgPer} alt=""/>
                  <input type="text" placeholder='Company Name'className='' />
                  </div>
                <div className="input-container  relative">
                  <img className='icon ' src={imgmail} alt=""/>
                  <input type="email" placeholder='Company Email'className=' ' />
                  </div>
                <div className="input-container  relative">
                  <img className='icon ' src={imggroups} alt=""/>
                  <input type="number" placeholder='Employee Size'className=' ' />
                  </div>
                  <div>
                <p className='text-center my-2'>By clicking on proceed you wil accept our </p>
                <p className='text-center '> Terms & Conditions</p>
                <div className="input-container">
                <button  type='submit' className='h-8  process-btn bg-blue-500 rounded-md w-full hover:bg-blue-400'>Proceed</button>
                </div>
                </div>
        
                </form>
                </div>

   
    </div>
    </div>
   
    
    </>
    
  )
}

export default SignUp