import { Feed } from '@/components/Feed'
import { LeftSideBar } from '@/components/LeftSideBar'
import { RightSideBar } from '@/components/RightSideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className='flex'>
        <div className="flex-grow ">
          <Feed />
          <Outlet />
        </div>
      </div>
    </>

  )
}
