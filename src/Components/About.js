import React, { useState } from 'react'

const About = (props) => {
  const [moh, setMoh] = useState(true)
  const toggle=()=>{
    // setMoh((prev)=>(prev==="Qasem"?"hello":"Qasem"))
    setMoh((prev)=>(!prev))
  }
  return (
    <div style={{
      width: "350px ",

    }}><span>{moh?"Qasem":"Moh"}</span>
      <div style={{
        width: "350px ",
        backgroundImage: `url(${props.image})`,
        height: "350px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "12px"

      }} onClick={()=>toggle()}></div>


      {/* <img src={props.image} alt='i' style={{ width: "450px" }} /> */}
      <div style={{
        // display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0px"
      }}>
        <h1>{props.name} </h1>
        <h5>⭐{props.review} </h5>

      </div>
      <h4 style={{ marginTop: "0px" }}>{props.price} $</h4>
      <p style={{ color: "gray", marginTop: "0px" }}>{props.descraption}</p>
    </div>
  )
}

export default About
