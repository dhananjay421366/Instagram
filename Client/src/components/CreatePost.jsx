import React, { useRef, useState } from 'react'
import { Dialog, DialogContent, DialogHeader } from './ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { readFileAsDataURI } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'

export const CreatePost = ({ open, setOpen }) => {
  const [file, setFile] = useState("")
  const [caption, setCaption] = useState("");
  const [imagePriview, setImagePreview] = useState("")
  const [loading, setLoading] = useState(false)

  const imageRef = useRef();
  const fileChangeHandler = async (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile(file)
    }
    const dataURL = await readFileAsDataURI(file)
    setImagePreview(dataURL)
  }

  const createPostHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);

    try {
      setLoading(true);
      const response = await axios.post("/api/v1/posts/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="text-black">
        <Dialog open={open}>

          <DialogContent className="text-black" onInteractOutside={() => setOpen(false)}>
            <div className='text-black'><DialogHeader className="text-black text-center font-semibold" >Create New Post</DialogHeader></div>
            <div className='flex gap-3 items-center '>
              <Avatar>
                <AvatarImage src="" alt="img" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <h1 className='font-semibold  text-xs'>Username</h1>
                <span className='font-semibold text-gray-600  text-xs'>Bio here...</span>
              </div>
            </div>
            <Textarea value={caption} onChange={(e) => setCaption(e.target.value)} className="focus-visible:ring-transparent border-none" placeholder="Write a caption..." />
            {
              imagePriview && (
                <div className="w-full h-64 items-center justify-center">
                  <img className='object-cover h-full w-full rounded-md' src={imagePriview} alt="preview_img" />
                </div>
              )
            }
            <input ref={imageRef} type="file" className='hidden' onChange={fileChangeHandler} />
            <Button onClick={() => imageRef.current.click()} className="w-fit mx-auto bg-[#0095F6] hover:bg-[#258cd1]">Select from Computer</Button>
            {
              imagePriview && (
                loading ? (<Button><Loader2 className=' mr-2 h-4 w-4 animate-spin' />Please wait</Button>) : (<Button onClick={createPostHandler}>Post</Button>)
              )
            }
          </DialogContent>
        </Dialog>

      </div>
    </>
  )
}
