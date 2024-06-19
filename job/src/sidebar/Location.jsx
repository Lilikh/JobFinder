import React from 'react'
import InputField from '../Components/InputField'

function Location({handleChange}) {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark '></span> All  
        </label>
        <InputField 
        handleChange={handleChange} 
        value="Stockholm"
         title="Stockholm" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="sweden"
         title="Sweden" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="malmö"
         title="Malmö" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="london"
         title="London" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="boston"
         title="Boston" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="brussels"
         title="Brussels" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="san Francisco"
         title="San Francisco" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="göteborg"
         title="Göteborg" 
         name="test" />
        <InputField 
        handleChange={handleChange} 
        value="dalarna"
         title="Dalarna" 
         name="test" />

        
      </div>
    </div>
  )
}

export default Location
