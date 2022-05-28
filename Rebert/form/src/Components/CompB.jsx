import React, { useRef, useState } from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CompB = () => {
    const textInput1 = useRef(null);
    const textInput2 = useRef(null);
    const textInput3 = useRef(null);
    const [data, setData] = useState({
        firstNumber: '',
        secondNumber: '',
        thirdNumber: '',
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        textInput1.current.value = "";
        textInput2.current.value = "";
        textInput3.current.value = "";
        console.log(data);
    };

    return <>
        <Box sx={{ width: '100%', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', border: "2px solid black", padding: '1rem', marginTop: '1rem' }}>
            <Typography variant="h5" component="div" gutterBottom>
                B. VALUE BY ADOPTING  PMR
            </Typography>
            <Divider />
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h6" component="" gutterBottom>
                    Prevailing Market Rate
                </Typography>
                <TextField
                    onChange={handleChange}
                    value={data.firstNumber}
                    required
                    id="firstNumber"
                    label="Enter Rate Per Sq. Mt. of Land"
                    name="firstNumber"
                    type="number"
                    autoComplete="off"
                    inputRef={textInput1}
                />
                <Typography variant="h6" component="" gutterBottom>
                    Unit Rate Adopted in this Valuation after considering the characteristics of Plot
                </Typography>
                <TextField
                    onChange={handleChange}
                    value={data.secondNumber}
                    required
                    id="secondNumber"
                    label="Enter Sq. Mt. of Land"
                    name="secondNumber"
                    type="number"
                    autoComplete="off"
                    inputRef={textInput2}
                />
                <Typography variant="h6" component="" gutterBottom>
                    Value of Land By adopting PMR
                </Typography>
                <TextField
                    onChange={handleChange}
                    value={data.thirdNumber}
                    required
                    id="thirdNumber"
                    label="Enter Sq. Mt. of Land"
                    name="thirdNumber"
                    type="number"
                    autoComplete="off"
                    inputRef={textInput3}
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

export default CompB