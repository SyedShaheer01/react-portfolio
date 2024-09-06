import React, { useRef, useState } from 'react'
import './work.css'
// import developer from '../assets/developer.gif'
import ticTac from '../assets/tic tac.png'
import eCommerce from '../assets/e-commerce2.png'
import share from '../assets/airshare.png'
import uni from '../assets/uni.png'
import text from '../assets/text.png'
import food from '../assets/Screenshot (8).png'
import { HiOutlineExternalLink } from "react-icons/hi";
// import { Link } from 'react-router-dom'


function Work() {
  const [btn, setBtn]=useState(false)
  const ref = useRef()
  
  const load=()=>{
    setBtn(prev=> prev === true ? false :true)

    if(btn){
      ref.current.innerHTML="LOAD MORE"
    }
    else{

      ref.current.innerHTML="SHOW LESS"
    }
  }
  

  return (
    <div className='work-parent'>
      <div className='work-heading'>
        <h1 data-aos="fade-down">WORKS</h1>
        <hr data-aos="fade-down"/>
      </div>
    
  
  <div id="works" data-aos="zoom-in">
    <div className="main2">
      <div className="screen">
        <div className="work">
          <img className='food-img' src={food} alt="" />
          <div className="layer">
            <h3 style={{ color: "white"}}>Food-Application</h3>
            <p style={{ color: "white" }}>with Next.JS(Mern Stack)</p>
            <a
              href="https://food-app-one-pearl.vercel.app/"
              target="_blank"  rel="noopener noreferrer" 
            >
            <HiOutlineExternalLink color='#212c89' />
              </a>
          </div>
        </div>
        <div className="work">
            <img  src={eCommerce} alt="" />
          <div className="layer">
            <h3 style={{ color: "white" }}>E-Commerce</h3>
            <p style={{ color: "white" }}> With Mern Stack</p>
            <a
              href="https://e-commerce-five-ecru.vercel.app/"
              target="_blank" rel="noopener noreferrer"  
            >
              <HiOutlineExternalLink color='#212c89' />

                    </a>
          </div>
        </div>
        <div className="work">
          <img  src={share} alt="" />
          <div className="layer">
            <h3 style={{ color: "white" }}>Air-Share</h3>
            <p style={{ color: "white" }}> With Next.JS & Firebase</p>
            <a href="https://air-share-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
            <HiOutlineExternalLink color='#212c89' />
            </a>
          </div>
        </div>
        { btn ?
        <>
        <div className="work">
          <img  src={uni} alt="" />
          <div className="layer">
            <h3 style={{ color: "white" }}>University website</h3>
            <p style={{ color: "white" }}> With Mern Stack ,Next.Js</p>
            <a href="https://university-website-sooty.vercel.app/" target="_blank" rel="noopener noreferrer" >
            <HiOutlineExternalLink color='#212c89' />
            </a>
          </div>
        </div>

           <div className="work">
           <img src={text} alt="" />
           <div className="layer">
             <h3 style={{ color: "white" }}>Text-Utils</h3>
             <p style={{ color: "white" }}> With React.JS</p>
             <a href="https://text-utils-flame-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
             <HiOutlineExternalLink color='#212c89' />
             </a>
           </div>
         </div>
           <div className="work">
           <img src={ticTac} alt="" />
           <div className="layer">
             <h3 style={{ color: "white" }}>Tic-Tac-toe game</h3>
             <p style={{ color: "white" }}>with React.JS</p>
             <a href="https://syedshaheer01.github.io/Tic-Tac-Toe-game/" target="_blank">
             <HiOutlineExternalLink color='#212c89' />
             </a>
           </div>
         </div>
           {/* <div className="work">
           <img src={developer} alt="" />
           <div className="layer">
             <h3 style={{ color: "white" }}>Saylani Form</h3>
             <p style={{ color: "white" }}> form</p>
             <a href="https://syedshaheer01.github.io/form/" target="_blank">
             <HiOutlineExternalLink color='#212c89' />
             </a>
           </div>
         </div> */}
         </>
         :<></>

        }
       
      </div>
    </div>
  </div>
      <button ref={ref} onClick={load} className='load-btn' data-aos="fade-down">LOAD MORE</button>



      </div>

      
    
  )
}

export default Work
