
import './Login.css';
function Login() {

 

    return(
        <div className='user-form'>
            <input 
                placeholder='email'
                type='email' 
            />
            <input 
                placeholder='password' 
                type='password'
            />
            <button>Login</button>
        </div>
    )
}

export default Login;