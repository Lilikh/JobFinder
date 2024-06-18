import Banner from "../Components/Banner"
import React, { useEffect, useState } from 'react'
import Card from "../Components/Card";
import Jobs from "../Components/Jobs";

const Home = () => {
  const [selectedCategory, setSelectCategory]=useState(null);
  const[jobs, setJobs]=useState([]);

  useEffect(()=>{
    fetch("jobs.json").then(res=>res.json().then((data)=>{
      
      setJobs(data)
    }))
  },[])
  console.log(jobs);
  const [query, setQuery]= useState("");
  const handleInputChange=(e)=>{
      setQuery(e.target.value)   
  }

  //filter jobs by title
  const filterItems=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
 
  //----------------------------------------- Radio filtering ------------------------------------

  const handleChange=(e)=>{
    setSelectCategory(e.target.value)
  }

  // -------------Button based filtering -------------------

  const handleClick=(e)=>{
    setSelectCategory(e.target.value)
  }


  // ------------------------ main function -------------------------------

  const filterData=(jobs, selected, query)=>{
    let filteredJobs =jobs;

    // filter input items
    if(query){
     filteredJobs=filterItems

    }
    //category filtering
    if(selected){
      filteredJobs= filteredJobs.filter(({jobLocation, maxPrice, experienceLevel,salaryType,employmentType,postingDate})=>
        (jobLocation.toLowerCase()=== selected.toLowerCase() ||
         parseInt( maxPrice)<= parseInt(selected) || 
         salaryType.toLowerCase() === selected.toLowerCase() ||
         employmentType.toLowerCase() === selected.toLowerCase()

        ));
        console.log(filteredJobs);
    }
    return filteredJobs.map((data, i)=> <Card key={i} data= {data}/>)
  }
   const result= filterData(jobs, selectedCategory,query)
  return (
  
    <div className="text-">
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">Left</div>
        <div className="col-span-2 bg-white p-4 rounded-sm"><Jobs  result={result}/></div>
        <div className="bg-white p-4 rounded">Right</div>
      </div>
  
    </div>
  )
}

export default Home
