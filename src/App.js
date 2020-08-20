import React from 'react';
import './App.css';

import TodoList from './components/todoList';
import AddTodo from './components/addTodo';

import { Typography, Card, CardContent } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Checklist</Typography>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
