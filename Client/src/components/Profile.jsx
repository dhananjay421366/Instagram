import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import useGetUseProfile from '@/hooks/userGetUserProfile'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const params = useParams()
    const userId = params.id
    useGetUseProfile(userId)

    const { userProfile } = useSelector((store) => store.auth)
    console.log("user profile", userProfile)
    return (
        <>
            <div className="">
                <Avatar>
                    <AvatarImage src={userProfile?.profilePicture} alt="profile_photo" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

        </>
    )
}
