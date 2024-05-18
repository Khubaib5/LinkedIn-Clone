import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
  return (
    <div className=''>
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