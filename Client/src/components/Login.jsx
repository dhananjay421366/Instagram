
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

export const Login = () => {
    const [form, setFormData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const HandleSubmit = async (e) => {
        e.preventDefault()
        console.log(form);
        try {
            console.log(form)
            setLoading(true)
            const res = await axios.post('/api/v1/users/login', form, {
                Headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.data.success) {
                navigate("/home")
                toast.success(res.data.message)


            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
            setFormData({
                username: "",
                email: "",
                password: "",
            });
        }
    }
    return (
        <div className="flex items-center w-screen h-screen justify-center">
            <form action="" className='shadow-lg shadow-white flex flex-col gap-5 p-8'>
                <div className=''>
                    <h1 className='text-center font-bold text-xl'>Logo</h1>
                    <p className='text-sm text-center'>Login to see photos & videos from your friend</p>
                </div>
                <div className="">
                    <Label className=" font-medium">Email</Label>
                    <Input type="email"
                        value={form.email}
                        name="email"
                        className="focus-visible:ring-transparent text-black  my-2"
                        placeholder="Email"
                        onChange={(e) => setFormData({ ...form, email: e.target.value })}
                    />

                </div>
                <div className="">
                    <Label className=" font-medium">Password</Label>
                    <Input type="password"
                        className="focus-visible:ring-transparent text-black  my-2"
                        placeholder="password"
                        id="password"
                        value={form.password}
                        name="password"
                        onChange={(e) => setFormData({ ...form, password: e.target.value })}
                    />
                </div>
                {
                    loading ? <Button>
                        <Loader2 className="mr-2 h-4" />
                    </Button> :
                        <Button onClick={HandleSubmit} type="submit">Login</Button>
                }
                <span className='text-center'>Dosen't have an  account ? <Link className='text-blue-600' to={"/signup"}>Signup</Link></span>
            </form>
        </div>
    )
}
