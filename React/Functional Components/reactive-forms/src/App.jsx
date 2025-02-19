import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [fnerrors, setfnErrors] = useState("");
    const [lnerrors, setlnErrors] = useState("");
    const [emailerrors, setemailErrors] = useState("");
    const [pwerrors, setpwErrors] = useState("");
    const [cpwerrors, setcpwErrors] = useState("");




    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        firstname.length < 3? setfnErrors("First name should be at least 3 characters long"): setfnErrors("");
        lastname.length < 3? setlnErrors("Last name should be at least 3 characters long"): setlnErrors("");
        email.length < 8 ? setemailErrors('Email should be at least 8 caracters length') : setemailErrors("");
        password.length < 8 ? setpwErrors("Password should be at least 8 characters length") : setpwErrors("");
        password != confirmpassword ? setcpwErrors("Passwords must match") : setcpwErrors("");



        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);

        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");

        setHasBeenSubmitted(true);
    };

    return (
        <div className='container mt-4'>
            <form onSubmit={createUser} className="p-4 border rounded shadow-sm bg-light">
                <h3>{hasBeenSubmitted ? "Thank you for submitting the form!" : "Welcome, please submit the form"}</h3>
                <div className='mb-3'>
                    <label className="form-label">First Name:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={firstname} 
                        onChange={(e) => setFirstname(e.target.value)} 
                    />
                    {fnerrors && <div className="text-danger mt-1">{fnerrors}</div>}
                </div>
                <div className='mb-3'>
                    <label className="form-label">Last Name:</label>
                    <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    {lnerrors && <div className="text-danger mt-1">{lnerrors}</div>}

                </div>
                <div className='mb-3'>
                    <label className="form-label">Email Address:</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailerrors && <div className="text-danger mt-1">{emailerrors}</div>}

                </div>
                <div className='mb-3'>
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {pwerrors && <div className="text-danger mt-1">{pwerrors}</div>}

                </div>
                <div className='mb-3'>
                    <label className="form-label">Confirm Password:</label>
                    <input type="password" className="form-control" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                    {cpwerrors && <div className="text-danger mt-1">{cpwerrors}</div>}

                </div>
                <button type="submit" className='btn btn-primary' onClick={(e) => createUser() }>Create User</button>
            </form>
        </div>
    );
};

export default UserForm;
//export default App ;