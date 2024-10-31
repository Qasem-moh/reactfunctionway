import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/user/show')
            .then((res) => res.json())
            .then((data) => setUser(data))

    }, []);
    async function deleteUser(id) {
       await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
        window.location.reload()
    }
    const showUsers = user.map((user, index) =>
    (
        <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <i class="fa-solid fa-pen-to-square"
                    style={{ color: "#74afb9", fontSize: "20px", paddingRight: "20px" }}
                ></i>
                <i class="fa-solid fa-trash"
                    style={{ color: "red", fontSize: "20px", paddingRight: "4px", cursor: "pointer" }}
                    onClick={() => deleteUser(user.id)}
                ></i>
            </td>

        </tr>
    )
    )
    return (
        <div className='table-content'>


            <table class="fixed_headers">
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
