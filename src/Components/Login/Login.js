import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <h3>Sign In</h3>
            <h5>Sign in to your account</h5>
            <div className="social-login">
                <button>
                    <img src="./google-icon.png" alt="google icon" />
                    <span>
                        Sign in with Google
                    </span>
                </button>
                <button style={{marginLeft: "0.5rem"}}>
                    <img src="./apple.png" alt="apple icon" />
                    <span>
                        Sign in with Apple
                    </span>
                </button>

            </div>
            <div className="signin-form">
                <div>
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" />
                </div>
                <h5>Forgot password?</h5>
                <button>Sign In</button>
            </div>
            <h6>Don’t have an account? Register here</h6>
        </div>
    )
}

export default Login;