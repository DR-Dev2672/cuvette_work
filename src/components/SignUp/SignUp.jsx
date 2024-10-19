import React from 'react'
import  img from './navbar.png'

function SignUp() {
  return (
    <>
    <div className="logo nav"> 
       <img src={img} alt="picture" />
    </div>
    <div className="container flex ">
    <div className="left">
        <p className='textleft' >Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
    </div>
    
        
        
       <div className="right flex justify-center flex-col border-2 rounded-lg">
        
        <form action="" className='flex flex-col'>
        <h1 className=' text-center SignUp'>Sign Up</h1>
        <p className='text-center'>Lorem Ipsum is simply dummy text</p>
        
        <input type="name"  className=' m-3 h-11 box-content' placeholder='Name' />
        <input type="tel" placeholder='Phone no.'className=' m-3 h-11' />
        <input type="text" placeholder='Company Name'className=' m-3 h-11' />
        <input type="email" placeholder='Company Email'className=' m-3 h-11' />
        <input type="number" placeholder='Employee Size'className=' m-3 h-11' />

        <p className='text-center'>By clicking on proceed you wil accept our </p>
        <p className='text-center'> Terms & Conditions</p>
        <button type='submit' className='pro-btn'>Proceed</button>
    

        </form>

    </div>
    </div>
    
    </>
    
  )
}

export default SignUp