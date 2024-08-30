import { Feed } from '@/components/Feed'
import { LeftSideBar } from '@/components/LeftSideBar'
import { RightSideBar } from '@/components/RightSideBar'
import getAllPost from '@/hooks/useGetAllPost'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  getAllPost()
  return (
    <>
      <div className=' ml-12 flex justify-between'>
        <div className="flex-grow ">
          <Feed />
          <Outlet />
        </div>
        <RightSideBar/>
      </div>
    </>

  )
}
