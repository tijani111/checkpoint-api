import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import{useEffect} from "react" 
import axios from "axios" 
import { displayHandler } from '../Redux/action'
export default function MovieList() {
 const dispatch = useDispatch()
   useEffect(() => {
        axios.get("http://movie-app-gmc.herokuapp.com/api/movies").then((res)=>dispatch(displayHandler(res.data))).catch((err)=>console.log(err))
    }, []);
    const list=useSelector(state=>state.movieList)
  

    return (
        <div className="card">
            

            {list.map((el)=>(<MovieCard film={el}/>))}
        </div>
    )
}
