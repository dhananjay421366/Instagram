import React from 'react'
import { Post } from './Post'

export const Posts = () => {
  return (
    <>
      <div className="m-8">
        {[1, 2, 3, 4].map((index, item) => <Post key={index} />)}
      </div>
    </>
  )
}
