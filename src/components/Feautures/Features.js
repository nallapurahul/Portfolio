import React from "react"
import "./Features.css"
import Skills from "./SkillsApi"
import Card from "./Card"
import Expertise from "./ExpertiseApi"
import Card1 from "./Card1"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container top'>
            <h1>
              About Me!
            </h1>
          <br/>
          <div className='heading'>
          <h4>Who am I?</h4>
          <p>Hi,I am Rahul Nallapu,A 21 year old web developer and a programming enthusiast,Currently pursuing my 4th year in Computer Science and Engineering at National Institute of Technology Warangal. </p>
          <br/>
          <h4>What I Do?</h4>
          <h2>Here are some of my expertise</h2>
          </div>

          <div className='content grid'>
            {Expertise.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

          </div>
          <br/>
          <h2>Here are some of my skills</h2>
          <br/>

          <div className='content grid'>
            {Skills.map((val, index) => {
              return <Card1 key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

          </div>


        </div>
      </section>
    </>
  )
}

export default Features;