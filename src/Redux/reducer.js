import { ADD, DISPLAY } from "./action-types"

const INITIAL_STATE={
movieList:[]
}
export const reducerMovies=(state=INITIAL_STATE,action)=>{
   switch(action.type)
{ case ADD:return {
    ...state,movieList:[...state.movieList,action.payload]
        
}
case DISPLAY:return {
    ...state ,movieList:action.payload
}
default :return state
}
}