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
        // first getting all professors names
        const isProfessor = localStorage.getItem('professor');
        let professors = [];
        if (isProfessor) {
            professors = JSON.parse(isProfessor);
        }
        // then pushing the new professor name
        professors.push(professor);
        // then saving the new list of professors
        localStorage.setItem('professor', JSON.stringify(professors));
        // then clearing the input
        setProfessor('');
        // alerting the user that the professor has been added
        alert(` ${professor} added successfully`);
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

        {/* show all professors */}
        <Paper elevation={3} style={{ textAlign: 'center', width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Typography variant="h6" >
                All - Professors
            </Typography>
        </Paper>
        <Paper elevation={3} style={{ textAlign: 'center', width: '50%', height: '5rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>
            <Typography variant="body1" >
                {localStorage.getItem('professor') ? JSON.parse(localStorage.getItem('professor')).map((professor, index) => {
                    return <Typography key={index} variant="body1" >
                        {professor}
                    </Typography>
                }) : <Typography variant="body1" >
                    No Professors Yet Please add Professor
                </Typography>
                }
            </Typography>
        </Paper>

    </>
}

export default Professor