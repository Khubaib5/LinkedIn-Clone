import connectDB from "@/lib/db"
import { Post } from "@/models/post.model"
import { NextResponse } from "next/server"

export const GET = async (req)=>{
    try {
        await connectDB()
        const post  = await Post.findById(_id)
        if(!post) return NextResponse.json(error, "Post not found")
        
        const comments = await Post.populate({
            path:"comments",
            options:{
                sort:{createdAt: -1},
            },
        })

        return NextResponse.json(comments)

    } catch (error) {
        return NextResponse.json("An error occured")
    }

}
