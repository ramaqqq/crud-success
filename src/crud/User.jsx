import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function User() {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {

            const response = await axios.get('http://localhost:2000/users')
                .then((response) => {
                    console.log('get data >>>>>', response.data);
                    // console.log(response.data ,'<<<<< access data')

                    setUsers(response.data)
                })
            // setUser(response.data);

            console.log(response)

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const deleteUser = async id => {
        await axios.delete(`http://localhost:2000/users/${id}`);
        users();
    };

    return (
        <div>

        <hr />
            <span>
                <Link
                    to={"/add"}
                    style={{ textDecoration: "none" }}
                    className="btn btn-primary m-2">
                    Add
                </Link>
            </span>

            <br />
        <hr />

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            && users.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <th>{index + 1}</th>
                                        <th>{item.username}</th>
                                        <th>{item.name}</th>
                                        <th>{item.email}</th>
                                        <th>
                                            <span>
                                                <Link
                                                    to={`/detail/${item.id}`}
                                                    style={{ textDecoration: "none" }}
                                                    className="btn btn-primary m-2">
                                                    Detail
                                                </Link>
                                                &nbsp;
                                                <Link
                                                    to={`/edit/${item.id}`}
                                                    style={{ textDecoration: "none" }}
                                                    className="btn btn-primary m-2">
                                                    Update
                                                </Link>
                                                &nbsp; 
                                                <Link
                                                    to="/"
                                                    style={{ textDecoration: "none" }}
                                                    className="btn btn-danger m-2"
                                                    onClick={() => deleteUser(item.id)}
                                                >
                                                    Delete
                                                </Link>

                                            </span>
                                        </th>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
