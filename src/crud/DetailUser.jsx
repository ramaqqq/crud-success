import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function DetailUser() {
  const { id } = useParams();

  const [detailUser, setDetailUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const getDetail = async () => {
    try {
      const response = await axios
        .get(`http://localhost:2000/users/${id}`)
        .then((response) => {
          console.log(">>>> detail data", response.data);

          setDetailUser(response.data);
        });

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <div className="container py-4">
        <Link className="btn btn-info" to="/">
          back to Home
        </Link>
        <h1>User Detail: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name: {detailUser.name}</li>
          <li className="list-group-item">user name: {detailUser.username}</li>
          <li className="list-group-item">email: {detailUser.email}</li>
        </ul>
      </div>
    </div>
  );
}
