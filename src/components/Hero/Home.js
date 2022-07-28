import React from "react"
import { useRef,useEffect } from "react"
import "./Home.css"
import Hero from "./hero.png"
import { init } from 'ityped'

const Home = () => {
  const textRef=useRef();
  useEffect(()=>{
      init(textRef.current,{
          showCursor:false,
          backDelay:1500,
          backSpeed:60,
          strings:["I love building things ","A software enthusiast"],
      });
  })

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top-0'>
            <br/>
            <br/>
            <h1>
              Hi, I’m <span>Rahul</span>
            </h1>
            <h2>
                  <span ref={textRef}></span>
            </h2>

               
          </div>
          <img src={Hero} style={{maxHeight:"60vh",marginTop:"50px"}}/>
        </div>
      </section>
    </>
  )
}

export default Home
