import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import About from "./Components/About";
import { data } from './data';
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";

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
      <Routes>
        <Route path="/" element={<div style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>{showData}</div>} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
