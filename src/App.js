
import './App.css';
import About from './Components/About';
import { data } from './data';
function App() {

  const showData=data.map((el)=><About title={el.title} desc={el.desc}/>)
  return (
    <div className="App">
    {showData}
  
 
    </div>
  );
}

export default App;
