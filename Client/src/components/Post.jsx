import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Bookmark, MessageCircle, MoreHorizontal, Send } from 'lucide-react'
import { Button } from './ui/button'
import { FaHeart, FaRegHeart } from "react-icons/fa";

import axios from 'axios'
import { toast } from 'sonner'
import { Badge } from './ui/badge'
import { CommentDialog } from './commentDialog'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletePost, setPost } from '@/redux/postSlice'


export const Post = ({ post }) => {
  const [content, setText] = useState("")
  const [open, setOpen] = useState(false)
  const { user } = useSelector((store) => store.auth);
  const { posts } = useSelector((store) => store.post)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(post.likes.includes(user?.data.user._id) || false)
  const [comments, setComments] = useState(post.comments)
  const [postlike, setPostlike] = useState(post.likes.length)
  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText)
    } else {
      setText("");
    }
  }
  const delePostHandler = async () => {
    try {
      const res = await axios.delete(`/api/v1/posts/${post?._id}/deletepost`, {
        withCredentials: true
      })
      if (res.data.success) {
        setOpen(false)
        const updatedPost = posts.filter((postItem) => postItem._id !== post?._id)
        dispatch(setPost(updatedPost))
        toast.success(res.data.message)

      }
    } catch (error) {
      toast.error(error.res.data.message)
    } finally {
      setOpen(false)
    }
  }

  const likeDislike = async () => {
    try {
      const action = liked ? 'dislike' : 'like'
      const res = await axios.post(`/api/v1/posts/${post._id}/${action}`, {
        withCredentials: true
      })
      if (res.data.success) {
        const updatedLike = liked ? postlike - 1 : postlike + 1;
        setPostlike(updatedLike)
        setLiked(!liked)
        toast.success(res.data.message)

      }
    } catch (error) {
      toast.error(error.res.data.message)
    }
  }

  const commentHandler = async () => {
    try {
      const res = await axios.post(`/api/v1/posts/${post._id}/addcomment`, { content }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      })
      if (res.data.success) {
        const updatedCommentData = [...comments, res.data.message]
        setComments(updatedCommentData)
        const updatePostData = posts.map((p) => p._id === post._id ? { ...p, comments: updatedCommentData } :
          p
        )
        dispatch(setPost(updatePostData))
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.res.data.message)
    }
  }
  return (
    <>
      <div className='my-8 w-full max-w-sm mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage
                src={post.author.profilePicture}
                alt="post_image" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-3'>
              <h1>
                {post.author.username.slice(0, 10)}
              </h1>
              <Badge variant="secondary">Author</Badge>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <MoreHorizontal className='cursor-pointer' />
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center text-sm text-center text-black">
              <Button variant='ghost' className="cursor-pointer w-fit text-[#ED4956] font-bold">Unfollow</Button>
              <Button variant='ghost' className="cursor-pointer w-fit">Add to favorites</Button>
              {/* if (user?.data.user._id === post.author._id) {
                <Button variant='ghost' className="cursor-pointer w-fit text-[#ED4956]">Delete</Button>
              } */}

              {
                user && user?.data.user._id === post.author._id && <Button variant='ghost' className="cursor-pointer w-fit text-[#ED4956]" onClick={delePostHandler}>Delete</Button>
              }


            </DialogContent>
          </Dialog>
        </div>
        <img
          className='rounded-sm my-2 w-full aspect-square object-cover'
          src={post.image}
          alt="post_img"
        />

        <div className='flex items-center justify-between my-2'>
          <div className='flex items-center gap-3'>

            {/* <FaHeart size={'24'} className='cursor-pointer text-red-600' /> */}
            {/* <FaRegHeart size={'22px'} onClick={likeDislike} className='cursor-pointer hover:text-gray-600' /> */}
            {
              liked ? <FaHeart size={'24'} onClick={likeDislike} className='cursor-pointer text-red-600' /> : <FaRegHeart size={'22px'} onClick={likeDislike} className='cursor-pointer hover:text-white-600' />
            }


            <MessageCircle onClick={() => setOpen(true)} className='cursor-pointer hover:text-gray-600' />
            <Send className='cursor-pointer hover:text-gray-600' />
          </div>
          <Bookmark className='cursor-pointer hover:text-gray-600' />
        </div>
        <span className='font-medium block mb-2'>
          <span className='mr-2'>  {postlike}</span>
          likes</span>
        <p>
          <span className='font-medium mr-2'>
            {post.author.username.slice(0, 10)}
          </span>
          {post.caption.slice(0, 15)}
        </p>
        <span onClick={() => setOpen(true)} className='cursor-pointer text-sm text-gray-400'>View all {comments.length}  comments</span>
        <CommentDialog open={open} setOpen={setOpen} />

        <div className='flex items-center justify-between'>
          <input
            type="text"
            value={content}
            onChange={changeEventHandler}
            placeholder='Add a comment...'
            className='outline-none text-black  my-2 py-2 rounded-md  text-sm w-[80%]'
          />
          {content && <span onClick={commentHandler} className='text-[#3BADF8] cursor-pointer'>Post</span>

          }
        </div>
      </div>

    </>
  )
}
