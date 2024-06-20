import React, {  useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable';
import '../App.css'

const CreateJob = () => {
    const [selectedOption, setSelectedOption]= useState(null)

    const {
        register,
        handleSubmit,reset,
     
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>
        
        { data.skills=selectedOption;
          console.log(data);
        fetch("http://localhost:3000/post-job",{
          method:"POST",
          headers:{"Content-type": "application/json"},
          body:JSON.stringify(data)
        })
          .then(res=>res.json())
          .then((result)=>{
            console.log(result);
            if(result.acknowledged ===true){
              alert("Job Posted Successfully !!!")
            }
            reset()
              
        })
      }
      const options = [
        {value : "JavaScript", label:"JavaScrip"},
        {value : "C++", label:"C++"},
        {value : "HTML", label:"HTML"},
        {value : "CSS", label:"CSS"},
        {value : "Typescript", label:"Typescript"},
        {value : "React", label:"React"},
        {value : "Node", label:"Node"},
        {value : "MongoDB", label:"MongoDB"},
        {value : "NextJs", label:"NextJs"},
      ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24  px-4'>
      {/* form */}
      <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* 1st row */}
            <div className=' create-job-flex'>
                
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Title</label>
                    <input type="text" placeholder='Web Developer' {...register("jobTitle")} className='create-job-input' />

                </div>
              
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Name</label>
                <input type="text"  placeholder='Ex: Microsoft'{...register("companyName")} className='create-job-input' />

                </div>
           
            </div>
           {/* 2nd row */}
           <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary</label>
                <input type="text" placeholder='$20k'  {...register("minPrice")} className='create-job-input' />

                </div>
              
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>maximum Salary</label>
                <input type="text"  placeholder='$120k'{...register("maxPrice")} className='create-job-input' />

                </div>
           
            </div>
            {/* 3rd row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Salary Type</label>
                <select {...register("salaryType")} className='create-job-input'>
                    <option value="">Choose your salary</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                 </select>

                </div>
              
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Location</label>
                <input type="text"  placeholder='Stockholm'{...register("jobLocation")} className='create-job-input' />

                </div>
           
            </div>
       {/* 4th row */}
       <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date</label>
                <input type="date"  placeholder='Ex: 2024-06-03'{...register("postingDate")} className='create-job-input' />

            </div>

            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Experince Level</label>
                <select {...register("experienceLevel")} className='create-job-input'>
                    <option value="">Choose your experience</option>
                    <option value="Any experience">Any experience</option>
                    <option value="Internship">Internship</option>
                    <option value="Work remotely">Work remotely</option>
                 </select>

            </div>
              
                
           
            </div>
            {/* 5th row */}
        <div>
        <label className='block mb-2 text-lg'>Require Skill Sets:</label>
        <CreatableSelect 
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
         className='create-job-input py-4' />
        </div>
      {/* 6th row */}

      <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo</label>
                <input type="url"  placeholder='Paste youtr company logo URL: https://wetransfer.com/'{...register("companyLogo")} className='create-job-input' />

            </div>

            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Employment Type</label>
                <select {...register("experienceLevel")} className='create-job-input'>
                    <option value="">Choose your experience</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">part-time</option>
                    <option value="temporary">Temporary</option>
                 </select>

            </div>
              
                
           
            </div>

        {/* 7th row */}

        <div className='w-full'>
         <label className='block mb-2 text-lg'>Job Description</label>
         <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
         rows={6}
         placeholder='Job Description'
         {...register("description")}  />
        </div>

        {/* Last row */}
        <div className='w-full'>
        <label className='block mb-2 text-lg'>Job Posted By</label> 
        <input type="email" placeholder='your email' {...register("postedBy")} className='create-job-input' />
        </div>


      <input type="submit" className='block nt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm mt-10' />
    </form>
      </div>
    </div>
  )
}

export default CreateJob
