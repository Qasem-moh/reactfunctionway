import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [user, setUser] = useState([])
    const[reloadPage,setReloadPage]=useState(0)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/user/show')
            .then((res) => res.json())
            .then((data) => setUser(data))

    }, [reloadPage]);
    async function deleteUser(id) {
     await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
        setReloadPage(prev=>prev+1)
    }
    const showUsers = user.map((user, index) =>
    (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`${user.id}`}>
                    <i className="fa-solid fa-pen-to-square"
                        style={{ color: "#74afb9", fontSize: "20px", paddingRight: "20px" }}
                    ></i>
                </Link>
                <i className="fa-solid fa-trash"
                    style={{ color: "red", fontSize: "20px", paddingRight: "4px", cursor: "pointer" }}
                    onClick={() => deleteUser(user.id)}
                ></i>
            </td>

        </tr>
    )
    )
    return (
        <div className='table-content'>


            <table className="fixed_headers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {showUsers}

                </tbody>
            </table>


        </div>

    )
}

export default Users
