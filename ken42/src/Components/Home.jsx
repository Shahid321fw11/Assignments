import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';


const Home = () => {
    const day_array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [state, setState] = useState({
        start_time: '',
        end_time: '',
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
                    label="day"
                    onChange={(event) => setState({ ...state, day: event.target.value })}
                >
                    {day_array.map((day, index) => <MenuItem key={index} value={day}>{day}</MenuItem>)}
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginTop: '1.5rem' }}>
                <TimePickerComponent placeholder='Select Starting Time'
                    format="HH:mm" step={30}
                    value={state.start_time}
                    onChange={(event) => setState({ ...state, start_time: event.target.value })}
                >
                </TimePickerComponent>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginTop: '1.5rem' }}>
                <TimePickerComponent placeholder='Select Ending Time' format="HH:mm" step={30} value={state.end_time}>
                </TimePickerComponent>
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
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '1.5rem' }} onClick={handleSubmit} >
                Submit
            </Button>


        </Paper>

        {/* show all time table */}
        <Paper elevation={3} style={{ textAlign: 'center', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', padding: '1rem' }}>
            <Typography variant="h6" >
                All Time Table
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Day</TableCell>
                            <TableCell align="right">Start Time</TableCell>
                            <TableCell align="right">End Time</TableCell>
                            <TableCell align="right">Professor</TableCell>
                            <TableCell align="right">ClassRoom</TableCell>
                            <TableCell align="right">StudentGroup</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            localStorage.getItem('timeTable') ? JSON.parse(localStorage.getItem('timeTable')).map((timeTable, index) => {
                                return <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {timeTable.day}
                                    </TableCell>
                                    <TableCell align="right">{timeTable.start_time}</TableCell>
                                    <TableCell align="right">{timeTable.end_time}</TableCell>
                                    <TableCell align="right">{timeTable.professor}</TableCell>
                                    <TableCell align="right">{timeTable.classRoom}</TableCell>
                                    <TableCell align="right">{timeTable.studentGroup}</TableCell>
                                </TableRow>
                            }) : <></>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </>
}

export default Home;
