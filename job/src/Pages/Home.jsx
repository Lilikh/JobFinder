import Banner from "../Components/Banner"
import React, { useEffect, useState } from 'react'
import Card from "../Components/Card";
import Jobs from "../Components/Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectCategory]=useState(null);
  const[jobs, setJobs]=useState([]);
  const[isLoading, setIsLoading]=useState(true)
  const [currentPage, setCurrentPage]=useState(1)
  const itemsPerPage=6;

  useEffect(()=>{
    setIsLoading(true)
    fetch("jobs.json").then(res=>res.json().then((data)=>{
      setJobs(data)
      setIsLoading(false)
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


  // calculate the index range
  const calculatePageRange=()=>{
    const startIndex=(currentPage-1)* itemsPerPage
    const endIndex =startIndex + itemsPerPage
    return {startIndex, endIndex}
  }
    // function for the next page

    const nextPage= ()=>{
      if(currentPage < Math.ceil(filterItems.length / itemsPerPage))
        {
          setCurrentPage (currentPage +1)
        }
    }
  
    //function for previouse the page


    const prevPage=()=>{
      if(currentPage>1){
        setCurrentPage(currentPage-1)
      }
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
        
        jobLocation.toLowerCase()=== selected.toLowerCase() ||
        parseInt( maxPrice)<= parseInt(selected) ||
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()

      );
        console.log(filteredJobs);
    }

    //Slice the data based on current page
    const{startIndex, endIndex}=calculatePageRange();
    filteredJobs=filteredJobs.slice(startIndex,endIndex)
    return filteredJobs.map((data, i)=> <Card key={i} data= {data}/>)
  }
   const result= filterData(jobs, selectedCategory,query)
  return (
  
    <div className="text-">
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded"><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>
        {/* Job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {
            isLoading ? (<p className="font-medium">Loading ....</p>) : result.length>0 ? (<Jobs  result={result}/>) : <>
            <h3 className="text-lg font-bold">{result.length} Jobs</h3>
            <p>No data found !</p>
            </>
             
          }
          {/* pagination here */}

         {
            result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button className="hover:underline" onClick={prevPage} disabled={currentPage===1}>Previouse</button>
              <span className="mx-2">Page {currentPage} of {Math.ceil(filterItems.length /itemsPerPage)}</span>
              <button onClick={nextPage} disabled={currentPage ===Math.ceil(filterItems.length / itemsPerPage)} className="hover:underline">Next</button>
            </div>
         ): ""
         }
          
        </div>
        
        {/* right side */}
        <div className="bg-white p-4 rounded"><Newsletter/></div>
      </div>
  
    </div>
  )
}

export default Home
