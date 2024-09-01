import { useState } from 'react';


const RegistrationForm = () => {
    const [formData , setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors , setErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
    });

    const {username ,email , password} = formData;

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({...formData , [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    if (!username) setErrors({...errors , nameError : "name is required"})
    if (!email) setErrors({...errors , emailError : "email is required"})
    if (!password) setErrors({...errors , passwordError : "password is required"})

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' placeholder='username'
            onChange={handleChange}
            value={username}/>
            {errors.nameError && <span>{errors.nameError}</span>}

            <input type="email" name='email' placeholder='email'
            onChange={handleChange}
            value={email}/>
            {errors.emailError && <span>{errors.emailError}</span>}

            <input type="password" name='password' placeholder='password'
            onChange={handleChange}
            value={password}/>
            {errors.passwordError && <span>{errors.passwordError}</span>}

            <button type='submit'>submit</button>
        </form>
    )
}

export default RegistrationForm;