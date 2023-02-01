import React, {useRef} from 'react';
import PropTypes from 'prop-types'

const TodoForm = (submit) => {

    // const createTodo = (e) =>{
    //     e.preventDefault();
    // }

    const newText = useRef();


    return (
        <div>
            <n2>Create your TODOs</n2>
            <form onSubmit={(e) =>{
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type='text' ref={newText}/>
                <button type='submit'>Create TODO</button>
            </form>
        </div>
    );
}

TodoForm.prototypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
