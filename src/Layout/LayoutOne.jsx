import React from 'react'
import Navber from '../Components/Navber/Navber'
import { Outlet } from 'react-router-dom'
import MobileNav from '../Components/MobileNav/MobileNav'

const LayoutOne = () => {
  return (
    <>
    <MobileNav/>
    <Navber/>
    <Outlet/>
    </>
  )
}

export default LayoutOne