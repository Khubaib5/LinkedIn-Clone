import Feed from "@/components/Feed";
import News from "@/components/News";
import SideBar from "@/components/SideBar";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user  = await currentUser()
  return (
   <div className="pt-20">
    <div className="max-w-6xl mx-auto flex justify-between gap-8">
      {/* leftsidebar  */}
      <SideBar user={user}/>
      {/* Feed */}
      <Feed user={user}/>
      {/* news  */}
      <News />
    </div>
   </div>
  );
}
