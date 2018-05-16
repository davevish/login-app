import TodoActionTypes from './TodoActionTypes';
import TodoDispacher from './TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispacher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },
    deleteTodo(id) {
        TodoDispacher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        });
    },
    toggleTodo(id) {
        TodoDispacher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        });
    },
};

export default Actions;