import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
  return (
    <div className='xs:mx-2'>
      {
        posts?.map((post)=>{
          return (
            <Post post={post} key={post.id}/>
          )
        })
      }
    </div>
  )
}

export default Posts