import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Professor = () => {
    const [professor, setProfessor] = useState('');

    const handleChange = (e) => {
        setProfessor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(professor);
    }

    return <>
        <Paper elevation={3} style={{ textAlign: 'center', width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Typography variant="h6" >
                Add - Professor
            </Typography>
        </Paper>
        <Paper elevation={3} style={{ textAlign: 'center', width: '50%', height: '5rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>
            <TextField id="standard-basic" label="Please Add Professor Name" variant="standard" name='professor' value={professor} onChange={handleChange} style={{ width: '50%' }} />
            <Button variant="contained" component="div" type="submit" onClick={handleSubmit}>Submit</Button>
        </Paper>



    </>
}

export default Professor