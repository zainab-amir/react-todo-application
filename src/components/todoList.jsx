import React from 'react';
import { connect } from "react-redux";
import Todo from './todo';
import { getCurrentState } from '../redux/reducer/selectors';
import { List } from '@material-ui/core';

const TodoList = ({ todos }) => (
  <List dense>
      {todos && 
        Object.entries(todos).map(([todoID, todo]) => {
          return <Todo key={todoID} id={todoID} {...todo} />;
        })
      }
  </List>
);

const mapStateToProps = state => ({
     todos: getCurrentState(state).todos
});

export default connect(mapStateToProps)(TodoList);