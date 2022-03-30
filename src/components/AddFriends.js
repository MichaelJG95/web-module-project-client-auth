import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddFriend = () => {
    const { push } = useHistory()
    const [form, setForm] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = evt => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <form onSubmit={onSubmit}>
          <h1>Add Friend</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input onChange={handleChange} name="name" id="name"/>
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input onChange={handleChange} name="age" id="age"/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input onChange={handleChange} name="email" id="email"/>
          </div>
          <button>Submit</button>
        </form>  
        )
}

export default AddFriend