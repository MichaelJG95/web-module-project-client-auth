import React from 'react'

export default function LoginForm() {

    const onSubmit = evt => {
        evt.preventDefault()
    }

    return(
        <form id="loginForm" onSubmit={onSubmit} >
            <h2>Login</h2>
            <input 
                placeholder="Enter username"    
            />
            <input 
                placeholder="Enter password"
            />
            <button id="submitCredential">SUBMIT</button>
        </form>
    )
}