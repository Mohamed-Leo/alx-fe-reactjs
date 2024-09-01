import { useState } from 'react';


const RegistrationForm = () => {
    const [formData , setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({...formData , [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' placeholder='username'
            onChange={handleChange}
            value={formData.username}/>

            <input type="email" name='email' placeholder='email'
            onChange={handleChange}
            value={formData.email}/>

            <input type="password" name='password' placeholder='password'
            onChange={handleChange}
            value={formData.password}/>

            <button type='submit'>submit</button>
        </form>
    )
}

export default RegistrationForm;