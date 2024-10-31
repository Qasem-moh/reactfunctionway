import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'
import Users from './Users'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div >
      <TopBar/>
      <div className='content'>

      <SideBar/>
      <div style={{width:'75%'}}>
      <Outlet/>

      </div>
      </div>
     
    </div>
  )
}

export default Dashboard
