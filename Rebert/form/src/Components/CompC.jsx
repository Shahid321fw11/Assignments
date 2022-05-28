import React, { useRef, useState } from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const Boolean = [
    {
        value: 'Yes',
        label: 'Yes',
    },
    {
        value: 'No',
        label: 'No',
    },
]

const CompC = () => {
    // const textInput1 = useRef(null);
    // const textInput2 = useRef(null);
    // const textInput3 = useRef(null);
    const [data, setData] = useState({
        firstBoolean: '',
        secondBoolean: '',
        thirdBoolean: '',
        fourthBoolean: '',
    });

    // const handleChange = (event) => {
    //     setData(event.target.value);
    // };
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // textInput1.current.value = "";
        // textInput2.current.value = "";
        // textInput3.current.value = "";
        console.log(data);
    };
    return <>
        <Box sx={{ width: '100%', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', border: "2px solid black", padding: '1rem', marginTop: '1rem' }}>
            <Typography variant="h5" component="div" gutterBottom>
                C. Extra Items
            </Typography>
            <Divider />
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h6" component="" gutterBottom>
                    Compound Wall / Fencing.
                </Typography>
                <TextField
                    name="firstBoolean"
                    id="firstBoolean"
                    select
                    label="Select"
                    type={Boolean}
                    value={data.firstBoolean}
                    onChange={handleChange}
                    helperText="Please select your Yes/No"
                >
                    {Boolean.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography variant="h6" component="" gutterBottom>
                    Deep Bore with Motor / Open Well
                </Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={data}
                    onChange={handleChange}
                    helperText="Please select your Yes/No"
                >
                    {Boolean.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography variant="h6" component="" gutterBottom>
                    Gate
                </Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={data}
                    onChange={handleChange}
                    helperText="Please select your Yes/No"
                >
                    {Boolean.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography variant="h6" component="" gutterBottom>
                    CoAdd For Sale Deed & Othersx
                </Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={data}
                    onChange={handleChange}
                    helperText="Please select your Yes/No"
                >
                    {Boolean.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/* <TextField
                    onChange={handleChange}
                    value={data.firstBoolean}
                    required
                    id="firstBoolean"
                    label="Yes/No"
                    name="firstBoolean"
                    type="select"
                    autoComplete="off"
                    inputRef={textInput1}
                /> */}
            </Box>

        </Box>



    </>
}

export default CompC