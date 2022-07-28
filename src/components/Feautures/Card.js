import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <center>
        <img src={props.image} style={{width:"60px"}} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        </center>
      </div>
    </>
  )
}

export default Card