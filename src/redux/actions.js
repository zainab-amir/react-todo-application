import * as TYPES from './actionTypes';

// Total number of TODOs. Default is 0
let todoCount = 0;

export const addTODO = (todo) => ({
    type: TYPES.ADD_TODO,
    payload: {
        id: ++todoCount,
        text: todo
    }
});

export const deleteTODO = (todoId) => ({
    type: TYPES.DELETE_TODO,
    payload: {
        // ID of TODO that needs to be deleted
        id: todoId
    }
});

export const toggleTODO = (todoId) => ({
    type: TYPES.TOGGLE_TODO,
    payload: {
        // ID of TODO that needs to be toggled
        id: todoId, 
    }
});
