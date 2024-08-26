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

export const Post = ({ post }) => {
  const [text, setText] = useState("")
  const [open, setOpen] = useState(false)
  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText)
    } else {
      setText("");
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
                 {post.author.username} 
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
              <Button variant='ghost' className="cursor-pointer w-fit text-[#ED4956]">Delete</Button>

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
            <FaRegHeart size={'22px'} className='cursor-pointer hover:text-gray-600' />


            <MessageCircle onClick={() => setOpen(true)} className='cursor-pointer hover:text-gray-600' />
            <Send className='cursor-pointer hover:text-gray-600' />
          </div>
          <Bookmark className='cursor-pointer hover:text-gray-600' />
        </div>
        <span className='font-medium block mb-2'>
          {post.likes.length}
          likes</span>
        <p>
          <span className='font-medium mr-2'>
            {post.author.username}
          </span>
          {post.caption}
        </p>
        <span onClick={() => setOpen(true)} className='cursor-pointer text-sm text-gray-400'>View all  comments</span>
        <CommentDialog open={open} setOpen={setOpen} />

        <div className='flex items-center justify-between'>
          <input
            type="text"
            value={text}
            onChange={changeEventHandler}
            placeholder='Add a comment...'
            className='outline-none text-black  my-2 py-2 rounded-md  text-sm w-[80%]'
          />
          {text && <span className='text-[#3BADF8] cursor-pointer'>Post</span>

          }
        </div>
      </div>

    </>
  )
}
