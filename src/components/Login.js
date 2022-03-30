import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const { push } = useHistory()
    const [cred, setCred] = useState({
      username: "",
      password: ""
    })

    const handleChange = evt => {
      setCred({
        ...cred,
        [evt.target.name]: evt.target.value
      })
    }
    
    const onSubmit = evt => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/login', cred)
          .then(res => {
            localStorage.setItem("token", res.data.token)
            push('/friends')
          })
          .catch(err => {
            console.log(err)
          })
    }
    

    return(
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input 
              id="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </form>  
        )
    }

    export default Login