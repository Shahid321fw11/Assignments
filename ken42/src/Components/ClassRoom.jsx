import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ClassRoom = () => {
    const [classRoom, setClassRoom] = useState('');

    const handleChange = (e) => {
        setClassRoom(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(classRoom);
        // first getting all classRoom names
        const isClassRoom = localStorage.getItem('classRoom');
        let classRooms = [];
        if (isClassRoom) {
            classRooms = JSON.parse(isClassRoom);
        }
        // then pushing the new classRoom name
        classRooms.push(classRoom);
        // then saving the new list of classRooms
        localStorage.setItem('classRoom', JSON.stringify(classRooms));
        // then clearing the input
        setClassRoom('');
        // alerting the user that the classRoom has been added
        alert(` ${classRoom} added successfully`);
    }

    return <>

        <Paper elevation={3} style={{ textAlign: 'center', width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Typography variant="h6" >
                Add - ClassRoom
            </Typography>
        </Paper>
        <Paper elevation={3} style={{ textAlign: 'center', width: '50%', height: '5rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>
            <TextField id="standard-basic" label="Please Add ClassRoom Name" variant="standard" name='classRoom' value={classRoom} onChange={handleChange} style={{ width: '50%' }} />
            <Button variant="contained" component="div" type="submit" onClick={handleSubmit}>Submit</Button>
        </Paper>

        {/* show all classRooms */}
        <Paper elevation={3} style={{ textAlign: 'center', width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Typography variant="h6" >
                All - ClassRooms
            </Typography>
        </Paper>
        <Paper elevation={3} style={{ textAlign: 'center', width: '50%', height: '5rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>
            <Typography variant="body1" >
                {
                    localStorage.getItem('classRoom') ? JSON.parse(localStorage.getItem('classRoom')).map((classRoom, index) => {
                        return <Typography key={index} variant="body1" >
                            {classRoom}
                        </Typography>
                    }) : <Typography variant="body1" >
                        No ClassRooms, Please Add ClassRooms First.
                    </Typography>
                }
            </Typography>
        </Paper>
    </>
}

export default ClassRoom