import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='side-bar' >
      <Link to={"users"}><h3>user</h3></Link>
      
    </div>
  )
}

export default SideBar
