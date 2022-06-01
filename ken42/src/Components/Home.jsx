import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Home = () => {
    const [state, setState] = useState({
        day: '',
        professor: '',
        classRoom: '',
        studentGroup: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }


    return <>
        <Paper elevation={3} style={{ textAlign: 'center', width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Typography variant="h6" >
                Shedule Time Table for KEN42
            </Typography>
        </Paper>
        <Paper elevation={3} style={{ textAlign: 'center', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Day</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={state.day}
                    onChange={(e) => {
                        setState({ ...state, day: e.target.value })
                    }}
                    label="day"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            {/* select dropdown  professor list from localstorage */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Professor</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={state.professor}
                    label="professor"
                    onChange={(e) => {
                        setState({ ...state, professor: e.target.value })
                    }}
                >
                    {/* iterate professor */}
                    {
                        localStorage.getItem('professor') ? JSON.parse(localStorage.getItem('professor')).map((professor, index) => {
                            return <MenuItem key={index} value={professor}>{professor}</MenuItem>
                        }) : <></>
                    }
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">ClassRoom</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={state.classRoom}
                    label="classRoom"
                    onChange={(e) => {
                        setState({ ...state, classRoom: e.target.value })
                    }}
                >
                    {/* iterate professor */}
                    {
                        localStorage.getItem('classRoom') ? JSON.parse(localStorage.getItem('classRoom')).map((classRoom, index) => {
                            return <MenuItem key={index} value={classRoom}>{classRoom}</MenuItem>
                        }) : <></>
                    }
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">studentGroup</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={state.studentGroup}
                    label="studentGroup"
                    onChange={(e) => {
                        setState({ ...state, studentGroup: e.target.value })
                    }}
                >
                    {/* iterate professor */}
                    {
                        localStorage.getItem('studentGroup') ? JSON.parse(localStorage.getItem('studentGroup')).map((studentGroup, index) => {
                            return <MenuItem key={index} value={studentGroup}>{studentGroup}</MenuItem>
                        }) : <></>
                    }
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '1rem' }} onClick={handleSubmit} >
                Submit
            </Button>


        </Paper>
    </>
}

export default Home;
