import React from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'
const Comments = () => {
  const handleComment = () => {

  }
  return (
    <div className='comments'>
        <p>1234 Comments</p>
        <div className="comment__form d-flex w-100 my-2">
          <img src='https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0' alt='' className='rounder-circle mr-3'/>
          <form onSubmit={handleComment} className='d-flex flex-grow-1'>
            <input type='text' className='flex=grow-1' placeholder='Write a comment...'/>
            <button className='border-0 p-2'>Comment</button>
          </form>
        </div>

        <div className="comments__list">
          {[...Array(15)].map(()=>(
            <Comment/>
          ))}
        </div>
    </div>
  )
}
export default Comments;
