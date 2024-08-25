import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { LeftSideBar } from './LeftSideBar'
import { Feed } from './Feed'
import { RightSideBar } from './RightSideBar'


export const Layout = () => {
  return (
    <>
      <Navbar />
      <LeftSideBar />
      <Outlet />
     
    </>
  )
}
