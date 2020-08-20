import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import { rootReducers } from '../redux/reducer';

export const createTodoAppStore = () => {
    const middleware = applyMiddleware(
        reduxLogger,
    );

    const store = createStore(rootReducers, middleware)
    return store;
}
