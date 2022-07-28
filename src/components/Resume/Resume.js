import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h1>Education Details</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}

              </div>
            </div>
          </div>
        </div>
        <div className='container top'>
            <div className='content-section mtop d_flex'>
              <div className='left'>
              <div className='heading'>
                  <h1>Projects</h1>
              </div>

              <div className='content'>
              {ResumeApi.map((val, index) => {
              if (val.category === "projects") {
              return <Card key={index} title={val.title} year={val.year} desc={val.desc} />
              }
              })}
              </div>
              </div>
            </div>

            <div className='content-section mtop d_flex'>
              <div className='left'>
              <div className='heading'>
                  <h1>Achievements</h1>
              </div>

              <div className='content'>
              {ResumeApi.map((val, index) => {
              if (val.category === "achievements") {
              return <Card key={index} title={val.title} year={val.year} desc={val.desc} />
              }
              })}
              </div>
              </div>
            </div>


          </div>
      </section>
      <center><h1>Thanks !! For Viewing</h1></center>
      <br/>


    </>
  )
}

export default Resume