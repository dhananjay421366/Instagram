import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Outlet />
    </>
  )
}
