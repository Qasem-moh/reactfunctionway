
// import './App.css';
import About from './Components/About';
import Form from './Components/Form';
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
    <div className="App" 
    style={{
      marginTop:"20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap:"20px",
      flexWrap:"wrap"
    }}>
      {/* {showData} */}
<Form/>

    </div>
  );
}

export default App;
