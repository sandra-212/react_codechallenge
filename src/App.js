import React, {useState, useEffect} from "react";
import { useInterval } from "./components/helpers";
import Data from './components/Data';
import EmptyTab from './components/EmptyTab';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {

  const[view,setView] = useState(false);
  const [data, setData] = useState([]);
  const [item,setItem]=useState({});
  
  const fetchData = () => {
    fetch("https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project")
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setItem(res[0])
        }) 
  };

  useEffect(() => {
    fetchData()
  }, []);

   useInterval(()=> {
    fetchData();
  }, 60000); 

  const handleClickEmpty = () => {
    setView(false)
  };

  const handleClickData = () => {
    setView(true)
  };
    
  return (
    <div className="App">
      <NavBar handleClickEmpty={handleClickEmpty} handleClickData={handleClickData} view={view}/>
     
          {view ? <Data data={data} item ={item}/> : <EmptyTab/>}
 
    </div>
  );
};

export default App;
