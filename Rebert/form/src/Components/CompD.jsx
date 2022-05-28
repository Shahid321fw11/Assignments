import React, { useRef, useState } from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CompD = () => {
    const textInput1 = useRef(null);
    const textInput2 = useRef(null);
    const textInput3 = useRef(null);
    const textInput4 = useRef(null);
    const [data, setData] = useState({
        firstBoolean: '',
        secondBoolean: '',
        thirdBoolean: '',
        fourthBoolean: '',
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        textInput1.current.value = "";
        textInput2.current.value = "";
        textInput3.current.value = "";
        textInput4.current.value = "";
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
                    onChange={handleChange}
                    value={data.firstBoolean}
                    required
                    id="firstBoolean"
                    label="Enter yes or no"
                    name="firstBoolean"
                    type="text"
                    autoComplete="off"
                    inputRef={textInput1}
                />
                <Typography variant="h6" component="" gutterBottom>
                    Deep Bore with Motor / Open Well
                </Typography>
                <TextField
                    onChange={handleChange}
                    value={data.secondBoolean}
                    required
                    id="secondBoolean"
                    label="Enter yes or no"
                    name="secondBoolean"
                    type="text"
                    autoComplete="off"
                    inputRef={textInput2}
                />
                <Typography variant="h6" component="" gutterBottom>
                    Gate
                </Typography>
                <TextField
                    onChange={handleChange}
                    value={data.thirdBoolean}
                    required
                    id="thirdBoolean"
                    label="Enter yes or no"
                    name="thirdBoolean"
                    type="text"
                    autoComplete="off"
                    inputRef={textInput3}
                />
                <Typography variant="h6" component="" gutterBottom>
                    Add For Sale Deed & Others
                </Typography>
                <TextField
                    onChange={handleChange}
                    value={data.fourthBoolean}
                    required
                    id="fourthBoolean"
                    label="Enter yes or no"
                    name="fourthBoolean"
                    type="text"
                    autoComplete="off"
                    inputRef={textInput4}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    </>
}

export default CompD;