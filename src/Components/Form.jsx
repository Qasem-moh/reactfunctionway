import { useEffect, useState } from "react";
import DataShow from "./dataShow";

export default function Form() {
 const [dData,stDdata]=useState([])

const renderData=dData.map((item)=><DataShow name={item}/>)

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then((res)=>res.json())
        .then(data=>{stDdata(data.data.memes)})
    },[]) //"[]"for get data once time
  console.log(dData);
  
  return (
    <div style={{
        // justifyContent:"center",
        // alignContent:"center",
        // justifyItems:"center",
        // margin:"auto 50px",
        display:"flex",
        width:"450px",
        flexWrap:"wrap"

    }}>
    {renderData}
    {/* {
        dData.map((item,index)=>{
return(
    <div>
        <span>{item.id}</span>
        <h3>{item.name}</h3>
        <img src={item.url} alt="" />
    </div>
)
        })
    } */}
    </div>
  );
}
