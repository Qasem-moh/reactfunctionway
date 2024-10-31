import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='top-bar'>
      <h1>test</h1>
      <div className="but">
            <h6 className="bb">
           <Link to="/" >Go to home <i class="fa-solid fa-right-from-bracket"></i></Link> 
            </h6>
          </div>
    </div>
  )
}

export default TopBar
