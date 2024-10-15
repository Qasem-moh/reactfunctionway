import React from 'react'

const About = (props) => {
  return (
    <div>
      <img src={props.image} alt='i'/>
      <h1>{props.name} </h1>
      <h4>{props.price}</h4>
      <p>{props.descraption}</p>
    </div>
  )
}

export default About
