import React from 'react'
import { Post } from './Post'
import { useSelector } from 'react-redux'

export const Posts = () => {
  const  {posts} = useSelector((store)=>store.post)
  console.log(posts);
  return (
    <>
      <div className="m-8">
        {posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </>
  )
}
