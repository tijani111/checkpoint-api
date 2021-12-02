import React,{ useState } from 'react';
import Filter from './Components/Filter';
import { useSelector } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Descrip from './Components/Descrip';
import MovieList from "./Components/MovieList"


function App() {

  const list=useSelector(state=>state.movieList)
  const [search,setSearch]= useState("");
  const [rate,setRate]= useState(1);
  const [input, setInput] = useState("");
  const [inputSrc, setInputSrc] = useState("");
  const [inputRate, setInputRate] = useState("");
  const [id, setId] = useState(1);
  const [inputDescription, setInputDescription] = useState("");

  
  //const addHandler=(newFilm)=>{
   //input&&  setMovieList(
     // [...movieList,newFilm]
   // );
 // };
  const Home=()=>{
    return (<div className="Home">
      
      <Filter id={id} setId={setId} rate={rate} setRate={setRate} setSearch={setSearch}  input={input} setInput={setInput} inputSrc={inputSrc} setInputSrc={setInputSrc} inputRate={inputRate} setInputRate={setInputRate}  
      InputDescription={inputDescription}
      setInputDescription={setInputDescription} />
    <MovieList  search={search} rate={rate}/>
    </div>);
  }
  return (
   
   <div className="App">
<BrowserRouter>
     <h2>Movio</h2>

     <Switch>
     <Route exact path='/'  render={(props) => (
    <Home {...props}  list={list} />
  )} />
      <Route path='/Descrip/:ID'  render={(props) => (
    <Descrip {...props}  list={list} />
  )} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
