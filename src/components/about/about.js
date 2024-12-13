import React, { useEffect } from 'react'
import '../about/about.css'
import gif from '../assets/developer.gif'
import AOS from 'aos'
import 'aos/dist/aos.css'


function About() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  
  
  
  return (
    <div className='abt-wrap'>

        <h1  data-aos="fade-down" style={{textAlign:'center', color:"#212ea0"}}>ABOUT ME</h1>
        <hr  data-aos="fade-down"/>
    <div className='abt-parent'>
        <div className='abt-left' data-aos="fade-up">
            <img  src={gif} alt=''/>
        </div>
        <div  className='abt-right' data-aos="fade-down">
          <p >

        <span>I'm a passionate and results-driven developer specializing in the MERN stack (MongoDB, Express.js, </span>
        <span>React, Node.js) and frontend technologies like React and Next.js. With a strong foundation in both  </span>  
        <span>backend and frontend development, I craft seamless and dynamic web applications that deliver  </span>
        <span>exceptional user experiences. My approach is rooted in clean, efficient code and a keen eye for </span> 
        <span>detail. Whether building complex full-stack solutions or creating responsive, engaging user  </span>
        <br/> 
        <span>interfaces, I thrive on solving challenges and turning innovative ideas into reality.</span> 
        <span> good user experience and my knowledge of the Web, and become an honest asset to the</span>
        <span>business. As an individual, I’m create a strong interest in my employers. I hope to develop</span>
        <span>skills in motion design and self-confident you’ll find me creative, funny and naturally </span> 
        <span>passionate. I’m a forward thinker, which others may find inspiring when working as a team.</span>


          </p>
        </div>
      
    </div>
    </div>
  )
}

export default About
