import React from 'react'
import InputField from '../Components/InputField'

const JobPostin = ({handleChange}) => {
    const now= new Date();
    const twentyFourHoursAgo=new Date(now - 24 * 60 * 60 * 1000);
    const SeventyDaysAgo=new Date(now -7 * 24 * 60 * 60 * 1000);
    const ThirtyDaysAgo=new Date(now-30 * 24 * 60 * 60 * 1000);
   
   

    // Conver date to string
    const twentyFourAgo= twentyFourHoursAgo .toISOString().slice(0,10);
    const SeventyAgo= SeventyDaysAgo .toISOString().slice(0,10);
    const ThirtyAgo= ThirtyDaysAgo .toISOString().slice(0,10);
    
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
    <div>
      <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handleChange} />
          <span className='checkmark '></span> All time 
      </label>
      <InputField 
      handleChange={handleChange} 
      value={twentyFourAgo}
       title="Last 24 hours"
       name="test" />
      <InputField 
      handleChange={handleChange} 
      value={SeventyAgo}
       title="Last 7 days " 
       name="test" />
      <InputField 
      handleChange={handleChange} 
      value={ThirtyAgo}
       title="Last Month" 
       name="test" />
      
    </div>
  </div>
  )
}

export default JobPostin
