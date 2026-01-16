import React from 'react'
import { Outlet } from 'react-router-dom'
import HomePg from "../pages/home/HomePg.jsx"



const HomeLayout = () => {
  return (
    <div>
      <HomePg />
    </div>
  )
}

export default HomeLayout