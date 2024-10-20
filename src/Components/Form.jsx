import { useEffect, useState } from "react";


export default function Form() {
 const [dData,stDdata]=useState([])
    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then((res)=>res.json())
        .then(data=>{stDdata(data.data.memes)})
    },[]) //"[]"for get data once time
  console.log(dData);
  
  return (
    <>
    {
        dData.map((item,index)=>{
return(
    <div>
        <span>{item.id}</span>
        <h3>{item.name}</h3>
        <img src={item.url} alt="" />
    </div>
)
        })
    }
    </>
  );
}
