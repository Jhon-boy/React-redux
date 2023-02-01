//Incremental ID for todos

let nextTodoID= 0;

export const ADD_TODO = 'ADD_TODO'
export const TOOGLE_TODO = 'TOOGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//Devuelve una accion 
/**
 * 
 * @param {String} text 
 * @returns actions ADD_TODO
 */
export const addTodo = (text) =>{
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text
        }
    }
}

export const toggleTodo = (id) =>{
    return {
        type: TOOGLE_TODO,
        payload: {
            id
        }
        
    }
}

export const setVisibilityFilter = (filter) =>{
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
} 