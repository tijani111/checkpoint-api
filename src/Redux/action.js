import { ADD,DISPLAY } from "./action-types"

export const addHandler=(newFilm)=>{
    return{
        type:ADD,
        payload:newFilm
    }
}
export const displayHandler=(movies)=>{
    return{
        type:DISPLAY,
        payload:movies
    }
}