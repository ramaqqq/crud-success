import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate();
    const [addUser, setAddUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const {name,username,email} = addUser;

    const onInputChange = e => {
        setAddUser({...addUser,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post("http://localhost:2000/users", addUser)
            .then((response) => {
                console.log("access data", response.data)

                alert("success")

                navigate("/")
            })
            
            console.log(response)

        } catch(error) {
            console.error(error.message);

            alert("failure")
        }
    }

    // console.log(addUser, ">>>>> input")

    return (
        <div>
            <hr />
            <Link
                className="btn btn-primary m-5"
                to="/"
            >
                back
            </Link>
            <hr />
                <h2>Add</h2>
            <form
            onSubmit={e => onSubmit(e)}
            >
                <div className="form-group m-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your name..."
                        name="name"
                        required
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>

                <div className="form-group m-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your Username..."
                        name="username"
                        required
                        value={username}
                        onChange={e => onInputChange(e)}
                    />
                </div>


                <div className="form-group m-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your Email..."
                        name="email"
                        required
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>

                <button
                    className="btn btn-primary btn-block m-2"
                >
                    Add
                </button>
            </form>

        </div>
    )
}
