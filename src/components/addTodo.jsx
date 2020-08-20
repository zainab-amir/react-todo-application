import React, { useState }  from 'react';
import { connect } from "react-redux";
import { addTODO } from '../redux/actions';
import { Button, TextField, Grid } from '@material-ui/core';

const AddTodo = ({ addTodo }) => {
    const [ input, setValue ] = useState('');

    const handleSubmit = () => {
        if (input) {
            addTodo(input);
            setValue('');
        }
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={9}>
                <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    fullWidth
                    size="small"
                    value={input}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="secondary" onClick={handleSubmit} >Add TODO</Button>
            </Grid>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTODO(text))
});

export default connect(null, mapDispatchToProps)(AddTodo);