import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import ApiDemo from "./components/ApiDemo.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";

// TEMPLATE: only the structure (empty tags + CSS classes).
// TODO (class): fetch the data, then pass it to each component using props.
function App() {
  let [data,setdata] = useState(null);
  let[loading,setloading] = useState(true);
  let[error,seterror] = useState(false);
  useEffect(()=>{
    fetch(`/portfolio.json`)
    .then((Response) =>{
      if(!Response.ok){
        throw new error("request failed")

      }
      return Response.json();
    })
    .then((result)=>{
      setdata(result);
      setloading(false)

    })
  },[])

  if(loading)return <p className="status">loading portfolio.....</p>
  if(error) return <p className="status">unable to load portfolio</p>
  return (
    <>
      <Navbar name={data.name}/>
      <main>
        <Hero data ={data}/>
        <About data ={data}/>
        <Skills Skills ={data.skills}/>
        <Projects projects ={data.projects}/>
        <Education Education={data.education}/>
        
        <Contact email ={data.email} socials = {data.socials} />
      </main>
      <Footer name ={data.name} socials ={data.socials}/>
    </>
  );
}

export default App;
