export default function Register() {
    return (
        <div className="container">
            <h3 className="heading">Register</h3>
            <form>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder="Enter email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <div>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input type="password" name="repeat-password" placeholder="Repeat Password" required />
                </div>
                <button className="submitBtn" type="submit">Submit</button>
            </form>
            <div>
                <p>Already Registered? Login</p>
            </div>
        </div>
    )
}