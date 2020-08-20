import React from 'react';
import { connect } from 'react-redux';
import { toggleTODO, deleteTODO } from '../redux/actions';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({id, description, isCompleted, toggleTodo, deleteTodo}) => (
    <ListItem key={id} button>
        <ListItemText id={id} primary={description} onClick={() => toggleTodo(id)} style={{textDecoration: isCompleted ? 'line-through' : 'none'}} />
            <ListItemSecondaryAction>
            <DeleteIcon onClick={() => deleteTodo(id)} />
        </ListItemSecondaryAction>
    </ListItem>
);

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTODO(id)),
    deleteTodo: id => dispatch(deleteTODO(id))
});


export default connect(null, mapDispatchToProps)(Todo);