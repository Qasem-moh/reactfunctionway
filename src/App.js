import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import About from "./Components/About";
import DataShow from "./Components/dataShow";
import { data } from './data';
function App() {
  const showData = data.map((el) =>
    <About
      key={el.id}
      name={el.name}
      image={el.image}
      price={el.price}
      review={el.review}
      descraption={el.description}
    />)
  return (
    <div className="App" >
     {/* {showData} */}
      {/* <About/> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<div  style={{
      marginTop:"20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap:"20px",
      flexWrap:"wrap"
    }}>{showData}</div>}/>
        <Route path="register" element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
