import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const CompC1 = () => {
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
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', padding: '1rem', marginTop: '1rem' }}>
            <table>
                <tr>
                    <th>C.</th>
                    <th colSpan={2} >Extra Items</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Compound Wall / Fencing.</td>
                    <td>
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
                        ></TextField>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Deep Bore with Motor / Open Well</td>
                    <td>
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
                        >
                        </TextField>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Gate			</td>
                    <td>
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
                        >
                        </TextField>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Add For Sale Deed & Others	</td>
                    <td>
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
                        >
                        </TextField>
                    </td>
                </tr>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>

            </table>
        </form>
    </>

}

export default CompC1;