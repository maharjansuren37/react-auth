export default function Register() {
    return (
        <div className="wide">
            <h3 className="heading">Register</h3>
            <form>
                <div>
                    <label className="formLabel">Email Address</label>
                    <input className="formInput" type="email" placeholder="Enter email" />
                </div>
                <div>
                    <label className="formLabel">Password</label>
                    <input className="formInput" type="password" placeholder="Password" />
                </div>
                <button className="submitBtn" type="submit">Submit</button>
            </form>
            <div>
                <p>Already Registered? Login</p>
            </div>
        </div>
    )
}