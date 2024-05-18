import { IPostDocument } from '@/models/post.model'
import Image from 'next/image'
import React from 'react'

const PostContent = ({ post }) => {
  return (
    <div className='my-3'>
      <p className='my-3 px-4'>{post?.description}</p>
      {
        post?.imageUrl && (
          <Image
            src={post?.imageUrl}
            width={300}
            height={300}
            alt="post-image"
            className='w-fit mx-auto sm:w-fit '
          />
        )
      }
    </div>
  )
}

export default PostContent