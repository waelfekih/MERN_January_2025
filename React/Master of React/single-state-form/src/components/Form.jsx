import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {
    const { users, addUser } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [msg, setMsg] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("❌ First Name is required ❌");
        } else if (e.target.value.length < 3) {
            setFirstNameError("❌ First Name must be at least 3 characters long ❌");
        } else setFirstNameError('');
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("❌ Last Name is required ❌");
        } else if (e.target.value.length < 3) {
            setLastNameError("❌ Last Name must be at least 3 characters long ❌");
        } else setLastNameError('');
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (e.target.value.length < 1) {
            setEmailError("❌ Email is required ❌");
        } else if (!emailPattern.test(e.target.value)) {
            setEmailError("❌ Email format incorrect ❌");
        } else setEmailError('');
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("❌ Password must be at least 8 characters long ❌");
        } else setPasswordError('');
    };

    const handlePasswordMatch = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("❌ Passwords must match ❌");
        } else setConfirmPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) {
            setMsg("❌ Please fill the form correctly ❌");
        } else {
            const newUser = { firstName, lastName, email, password, confirmPassword };
            if (addUser) {
                addUser(newUser);
            }
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setMsg('');
        }
    };

    return (
        <div className='container text-center mt-4 form-group'>
            <form onSubmit={handleSubmit}>
                <div className='form-control mt-2'>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={handleFirstName} />
                    {firstNameError && <p className='text-danger text-center'>{firstNameError}</p>}
                </div>

                <div className='form-control mt-2'>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                    {lastNameError && <p className='text-danger text-center'>{lastNameError}</p>}
                </div>

                <div className='form-control mt-2'>
                    <label>E-mail:</label>
                    <input type="email" value={email} onChange={handleEmail} />
                    {emailError && <p className='text-danger text-center'>{emailError}</p>}
                </div>

                <div className='form-control mt-2'>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePassword} />
                    {passwordError && <p className='text-danger text-center'>{passwordError}</p>}
                </div>

                <div className='form-control mt-2'>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={handlePasswordMatch} />
                    {confirmPasswordError && <p className='text-danger text-center'>{confirmPasswordError}</p>}
                </div>

                {msg && <p className='text-danger text-center'>{msg}</p>}

                <input type="submit" value="Submit" className='btn btn-primary mt-3' />
            </form>

            <div>
                <h3 className='text-center mt-5'>Your Form Data</h3>
                {users && users.map((oneUser, index) => (
                    <p key={index}>
                        <strong>First Name:</strong>  {oneUser.firstName} <br />
                        <strong>Last Name:</strong>  {oneUser.lastName} <br />
                        <strong>E-mail: </strong> {oneUser.email} <br />
                        <strong>Password :</strong>  {oneUser.password} <br />
                        <strong>Confirm Password :</strong>  {oneUser.confirmPassword}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Form;
