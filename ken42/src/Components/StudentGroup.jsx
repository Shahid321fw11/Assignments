import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const StudentGroup = () => {
    const [studentGroup, setStudentGroup] = useState('');

    const handleChange = (e) => {
        setStudentGroup(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(studentGroup);
        // first getting all classRoom names
        const isStudentGroup = localStorage.getItem('studentGroup');
        let studentGroups = [];
        if (isStudentGroup) {
            studentGroups = JSON.parse(isStudentGroup);
        }
        // then pushing the new classRoom name
        studentGroups.push(studentGroup);
        // then saving the new list of classRooms
        localStorage.setItem('studentGroup', JSON.stringify(studentGroups));
        // then clearing the input
        setStudentGroup('');
        // alerting the user that the classRoom has been added
        alert(` ${studentGroup} added successfully`);
    }

    return <>

        <Paper elevation={3} style={{ textAlign: 'center', width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Typography variant="h6" >
                Add - StudentGroup
            </Typography>
        </Paper>
        <Paper elevation={3} style={{ textAlign: 'center', width: '50%', height: '5rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>
            <TextField id="standard-basic" label="Please Add StudentGroup Name" variant="standard" name='studentGroup' value={studentGroup} onChange={handleChange} style={{ width: '50%' }} />
            <Button variant="contained" component="div" type="submit" onClick={handleSubmit}>Submit</Button>
        </Paper>

        {/* show all studentGroup */}
        <Paper elevation={3} style={{ textAlign: 'center', width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Typography variant="h6" >
                All - StudentGroups
            </Typography>
        </Paper>
        <Paper elevation={3} style={{ textAlign: 'center', width: '50%', height: '5rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>
            <Typography variant="body1" >
                {
                    localStorage.getItem('studentGroup') ? JSON.parse(localStorage.getItem('studentGroup')).map((studentGroup, index) => {
                        return <Typography key={index} variant="body1" >
                            {studentGroup}
                        </Typography>
                    }) : <Typography variant="body1" >
                        No StudentGroup Added Yet, Please Add StudentGroup.
                    </Typography>
                }

            </Typography>
        </Paper>
    </>
}

export default StudentGroup