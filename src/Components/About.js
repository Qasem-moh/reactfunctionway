import React from 'react'

const About = (props) => {
  return (
    <div style={{
      width: "350px ",

    }}>
      <div style={{
        width: "350px ",
        backgroundImage: `url(${props.image})`,
        height: "350px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center",
        borderRadius:"12px"

      }}></div>


      {/* <img src={props.image} alt='i' style={{ width: "450px" }} /> */}
      <div style={{ 
        // display: "flex",
         alignItems: "center",
          justifyContent: "space-between",
           marginBottom: "0px" }}>
        <h1>{props.name} </h1>
        <h5>⭐{props.review} </h5>

      </div>
      <h4 style={{ marginTop: "0px" }}>{props.price} $</h4>
      <p style={{ color: "gray", marginTop: "0px" }}>{props.descraption}</p>
    </div>
  )
}

export default About
