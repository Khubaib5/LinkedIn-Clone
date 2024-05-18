import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const navItems= [
    {
        src: "/home",
        icon: <Home />,
        text: "Home",
    },
    {
        src: "/networks",
        icon: <Users />,
        text: "My Network",
    },
    {
        src: "/job",
        icon: <BriefcaseBusiness />,
        text: "Jobs",
    },
    {
        src: "/message",
        icon: <MessageCircleMore />,
        text: "Messaging",
    },
    {
        src: "/notification",
        icon: <Bell />,
        text: "Notification",
    },
]


const NavItems = () => {
  return (
    <div className='flex gap-8'>
        {
            navItems.map((item, index ) => (
                <div className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black' key={index}>
                    <span className=''>{item.icon}</span>
                    <Link href={item.src} className='text-xs'>{item.text}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default NavItems