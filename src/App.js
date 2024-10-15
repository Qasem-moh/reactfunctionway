
import './App.css';
import About from './Components/About';
import { data } from './data';
function App() {

  const showData=data.map((el)=>
  <About
  key={el.id}
   name={el.name} 
  image={el.image}
  price={el.price}
descraption={el.description}
  />)
  return (
    <div className="App">
    {showData}
  
 
    </div>
  );
}

export default App;
