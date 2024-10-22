import React from 'react'

function Jobform() {
  return (
    <div className="jobform">

           
    <form action="" className=''>
        <div className="formrow">
        <label htmlFor="title">Job Title</label>
        <input type="text" name="title" id="title" className=' ' />
        </div>
        <div className="formrow">
        <label htmlFor="title">Job Description</label>
        <textarea name="" rows={6} cols={40} id="" className='border-2'></textarea>
        </div>
        <div className="formrow">
        <label htmlFor="title">Experience Level</label>
        <select name="" id="" className='w-1/2'>
            <option value="">fsdsf</option>
            <option value="">sfssfff</option>
        </select>
        
        </div>
        <div className="formrow">
        <label htmlFor="addcandidate">Add Candidate</label>
        <input type="email" name="addcandidate" id="addcandidate" className='' />
        </div>
        <div className="formrow">
        <label htmlFor="enddate">End Date</label>
        <input type="date" name="enddate" id="enddate" className=' ' />
        </div>
    
    </form>

    </div>
    
        
  )
}

export default Jobform