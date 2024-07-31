import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    let emailInputRef = useRef();
    let passwordInputRef = useRef();



  return (
    <div className='App'>
        <form>
        <h2>LOGIN</h2>
            <div>
                <label>Email</label>
                <input ref={emailInputRef} type='text'></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef} type='text'></input>
            </div>
            <div>
                <button type='button'>Login</button>
            </div>
        </form>
        <br></br>
       <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login