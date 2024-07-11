import { useState } from "react"

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password})
        }).then(result => console.log(result))
        .catch((error) => console.log(error));

    }

    return (
        <div className="container center">
            <h3 className="heading">Register</h3>
            <form className="form-wrapper" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <div>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input 
                        type="password" 
                        name="repeat-password" 
                        placeholder="Repeat Password" 
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required />
                </div>
                <button className="submitBtn" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            <p className="registered">Already Registered? Login</p>
        </div>
    )
}