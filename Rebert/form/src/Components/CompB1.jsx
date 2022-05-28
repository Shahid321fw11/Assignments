import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CompB1 = () => {
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
        // textInput1.current.value = "";
        // textInput2.current.value = "";
        // textInput3.current.value = "";
        console.log(data);

    };

    return <>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', padding: '1rem', marginTop: '1rem' }}>
            <table>
                <tr>
                    <th>B.</th>
                    <th colSpan={2} >VALUE BY ADOPTING  PMR</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prevailing Market Rate	</td>
                    <td> <TextField
                        onChange={handleChange}
                        value={data.firstNumber}
                        required
                        id="firstNumber"
                        label="Enter Per Sq. Mt. of Land"
                        name="firstNumber"
                        type="number"
                        autoComplete="off"
                        inputRef={textInput1}
                    /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Unit Rate Adopted in this Valuation after considering the characteristics of Plot</td>
                    <td> <TextField
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
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Value of Land By adopting PMR</td>
                    <td> <TextField
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
                    </td>
                </tr>
                <Button
                    style={{ float: 'right' }}
                    type="submit"
                    // fullWidth
                    variant="contained"
                >
                    Submit
                </Button>
            </table>
        </form>

    </>
}

export default CompB1;