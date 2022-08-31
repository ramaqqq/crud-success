import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UpdateUser() {

    let navigate = useNavigate();
    const { id } = useParams();

    console.log(">>>>>>>>>> id", id)

    const [UserUpdate, setUserUpdate] = useState({
        name: "",
        username: "",
        email: "",
    });

    const { name, username, email } = UserUpdate;
    const onInputChange = e => {
        setUserUpdate({ ...UserUpdate,[e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:2000/users/${id}`, UserUpdate)
                .then((response) => {
                    console.log(">>>>>> update", response.data);
                    alert("Success")
                    navigate("/")
                })

            console.log(response)
        } catch (error) {
            console.error(error.message)
            alert("Failuer")
        }
    }

    const getUser = async () => {
        try {
            const result = await axios.get(`http://localhost:2000/users/${id}`)
                .then((result) => {
                    console.log(result.data, "<<<<<< get")

                    setUserUpdate(result.data)
                })
                console.log(result)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getUser();
    }, [])



    return (
        <div>
            <div className="container py-4">
                <Link className="btn btn-info" to="/">
                    back to Home
                </Link>
                <h1>
                    User Detail: {id}
                </h1>
                <hr />
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
        </div>
    )
}
