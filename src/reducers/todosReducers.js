//Initial TodosState
//Initial todos is empty

import { ADD_TODO , TOOGLE_TODO} from "../actions/actions";

let initialState = [];

export const todosReducers = ( state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, //con eso copiamos todo
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
    case TOOGLE_TODO:
        return state.map((todo)=>
            (todo.id === action.payload.id)
             ?
            {
                ...todo,
                completed: !todo.completed
            }
            :
            todo
        )
        default:
            return state;   
    }
}   