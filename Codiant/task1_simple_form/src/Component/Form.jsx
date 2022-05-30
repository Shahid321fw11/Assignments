import React, { useState } from 'react';
import Paper from '@mui/material/Paper';

const Form = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        number: '',
        email: '',
        password: '',
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return <>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', padding: '1rem', marginTop: '1rem' }} >
            <Paper elevation={3}>

                <label className='blk'>
                    First Name:
                    <input type="text" name="firstName" value={data.firstName} onChange={handleChange} />
                </label>
                <label className='blk'>
                    Last Name:
                    <input type="text" name="lastName" value={data.lastName} onChange={handleChange} />
                </label>
                <label className='blk'>
                    Phone Number:
                    <input type="Number" name="number" value={data.number} onChange={handleChange} />
                </label>
                <label className='blk'>
                    Email:
                    <input type="email" name="email" value={data.email} onChange={handleChange} />
                </label>
                <label className='blk'>
                    Password:
                    <input type="password" name="password" value={data.password} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </Paper>
        </form>
    </>
}

export default Form;