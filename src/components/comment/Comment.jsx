import React from 'react'
import moment from 'moment'
const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
        <img
            src='https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0'
            alt=''
            className='rounded-circle mr-3'
        />
        <div className="comment__body">
            <p className='comment__header'>
                Abhishek • {moment('2024-10-07').fromNow()}
            </p>
            <p>Nice Video DUDE!!!</p>
        </div>
    </div>
  )
}

export default Comment
