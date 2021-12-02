import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
export default function Descrip({match,movieList}) {
    
  const list=useSelector(state=>state.movieList)
    const ID=match.params.ID;
    console.log(ID);
   const mov=list.find(el=>el.id==ID);
   console.log(mov);
   
    return (
        <div>
           
           <Link to={"/"}>
            <h2>{mov.titre}</h2>
            </Link>
           <p>{mov.description}</p>
           <ReactPlayer
        url={mov.video} 
      />
      
      
        </div>
    )
}
