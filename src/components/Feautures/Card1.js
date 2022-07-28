import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow' style={{height:"250px"}}>
        <center>
        <img src={props.image} style={{width:"40px"}} alt='' />
        <h2>{props.title}</h2>
        </center>
      </div>
    </>
  )
}

export default Card