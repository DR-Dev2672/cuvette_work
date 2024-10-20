import React from 'react'
import  img from '../../assets/navbar.png'
import imgPer from '../../assets/personicon.png'

function SignUp() {
  return (
    <>

    <nav>
    
       <img src={img} alt="nav_logo" />
    
    </nav>

   <section >
    <div className="container flex flex-row" >
    
    <div className="left w-1/2 flex ">
        <p className="lefttext" >Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
    </div>
    
        
        
       <div className="right   flex justify-center flex-col border-2 border-blue-400 rounded-lg">
        
        <form action="" className='flex flex-col'>
        <h1 className=' text-center SignUp font-sans text-xl font-medium'>Sign Up</h1>
        <p className='text-center'>Lorem Ipsum is simply dummy text</p>
        <div className="imagecontainer  relative">
          <img className='personicon ' src={imgPer} alt=""/>
          <input type="name"  className=' ' placeholder='Name' />
        </div>

        <input type="tel" placeholder='Phone no.'className='' />
        <input type="text" placeholder='Company Name'className=' m-3 h-9' />
        <input type="email" placeholder='Company Email'className=' m-3 h-9' />
        <input type="number" placeholder='Employee Size'className=' m-3 h-9' />

        <p className='text-center'>By clicking on proceed you wil accept our </p>
        <p className='text-center'> Terms & Conditions</p>
        <button type='submit' className='pro-btn bg-blue-500 rounded-md'>Proceed</button>
    
 
        </form>

   
    </div>
    </div>
    </section>
    
    </>
    
  )
}

export default SignUp