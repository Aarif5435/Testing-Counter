
import './App.css';
import { Button } from './components/AddButtton';
import {useState} from "react";

function App() {
const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h3>Count is {count}</h3>
      <Button onClick={()=>{setCount(count+5)}}>Add Count</Button>
      
      <Button onClick={()=>{setCount(count-5)}}>Reduce Count</Button>
    </div>
  );
}

export default App;
