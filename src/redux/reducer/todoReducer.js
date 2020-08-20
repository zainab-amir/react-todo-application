import * as TYPES from '../actionTypes';

const initialState = {}

export const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_TODO:
            const { id, text } = action.payload;
            return {
                ...state, 
                todos: {
                    ...state.todos,
                    [id]: {
                        description: text,
                        isCompleted: false
                    }
                }
            }
        case TYPES.DELETE_TODO:
            const deleteTodoID = action.payload.id;
            const updatedTodos = { ...state.todos };
            delete updatedTodos[deleteTodoID];

            return {
                ...state,
                todos: {
                    ...updatedTodos
                }
            }
        case TYPES.TOGGLE_TODO:
            const toggleTodoID = action.payload.id;
            return {
                ...state, 
                todos: {
                    ...state.todos,
                    [toggleTodoID]: {
                        ...state.todos[toggleTodoID],
                        isCompleted: !state.todos[toggleTodoID].isCompleted
                    }
                }
            }
        default:
            return state
    }
}