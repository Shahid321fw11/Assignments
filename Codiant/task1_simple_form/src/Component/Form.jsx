import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} >
            <label>
                First Name:
                <input type="text" name="firstName" value={data.firstName} onChange={handleChange} />
            </label>
            <label>
                Last Name:
                <input type="text" name="lastName" value={data.lastName} onChange={handleChange} />
            </label>
            <label>
                Phone Number:
                <input type="Number" name="number" value={data.number} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={data.email} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={data.password} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
    </>
}

export default Form;