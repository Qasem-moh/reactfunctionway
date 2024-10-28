import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route path="register" element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
