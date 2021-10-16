import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {

  const [loding, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value , setValue] = useState(0)

  const fetchJobs = async () =>{
    const response = await fetch(url)
    const newJobs = await response.json();
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchJobs()
  },[])

  
  if(loding){
    return <h2>Loading</h2>
  }

  const {duties, title, dates} = jobs[value]
  return <section>
    <h1>All Jobs</h1>

    <div className="buttons">
      {
      jobs.map((item, index)=>{
        return (
          <button onClick={()=> setValue(index)} className={`job-btn ${index === value && 'active'}`} key={item.id}>{item.company}</button>
        );
      })
      }
    </div>

    <div className="single-job">
     <h3> {title} || {dates}</h3>
     

     {
       duties.map((duty, index)=>{
         return(
           <p key={index}>{duty}</p>
         );
       })
     }
     
    </div>
  </section>
}

export default App;