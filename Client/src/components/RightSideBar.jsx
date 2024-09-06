import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const RightSideBar = () => {
  const { user } = useSelector((store) => store.auth)
  return (
    <div className="w-fit my-10 pr-32">
      <div className="flex  items-center gap-2">
        <Link to={`/profile/${user?.data.user._id}`}>
          <Avatar>
            <AvatarImage
              src={user?.data.user.profilePicture}
              alt="post_image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div
        //  className='flex flex-col items-center  gap-3'
        >
          <h1 className='font-semibold text-sm'>
            <Link to={""}>
              {user?.data.user.username}
            </Link>
          </h1>
          <span className=' text-sm'>
            {user?.data.user.Bio || 'bio here'}
          </span>
        </div>
      </div>
    </div>
  )
}
