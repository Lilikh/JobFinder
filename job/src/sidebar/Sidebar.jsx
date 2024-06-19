
import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostin from './JobPostin'
import WorkExperince from './WorkExperince'
import Employment from './Employment'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
      <Location handleChange={handleChange}/>
      <Salary handleChange={handleChange} handleClick={handleClick}/>
      <JobPostin handleChange={handleChange}/>
      <WorkExperince  handleChange={handleChange}/>
      <Employment handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
