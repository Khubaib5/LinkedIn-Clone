import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const ProfilePhoto = ({src}) => {
  return (
    <Avatar className={"cursor-pointer"}>
    <AvatarImage src={src} />
  </Avatar>
  
  )
}

export default ProfilePhoto