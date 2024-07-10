import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ReactShowMoreText from 'react-show-more-text'
  const VideoMetaData=()=> {
    return (
      <div className="videoMetaData py-2">
        <div className="videoMetaData__top">
          <h5>Video Title</h5>
          <div className='d-flex justify-content-between align-items-center py-1'>
            <span>
              {numeral(10000).format('0.a')} Views •
              {moment('2020-06-6').fromNow()}
            </span>
            <div>
              <span className='mr-3'>
                <MdThumbUp size={26} />
                {numeral(10000).format('0.a')}
              </span>
              <span className='mr-3'>
                <MdThumbDown size={26} />
                {numeral(10000).format('0.a')}
              </span>
            </div>
          </div>
        </div>

        <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
          <div className='d-flex'>
            <img
              src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0" alt=''
              className='rounder-circle mr-3' 
            />

            <div className='d-flex flex-column'>
              <span>Abhishek Prime</span>
              <span> {numeral(10000).format('0.a')} Subscribers</span>
            </div>
          </div>
          <button className="btn border-0 p-2 m-2">Subscribe</button>
        </div>


        <div className="videoMetaData__description">
          <ReactShowMoreText lines={3} more="SHOW MORE" less="SHOW LESS" anchorClass="showMoreText" expanded={false}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga atque esse cupiditate culpa suscipit quidem. Nulla ratione delectus, illum veritatis voluptates voluptatibus, vitae dolor architecto dolorem quaerat magni neque at recusandae doloribus distinctio vel magnam blanditiis est mollitia fugiat, natus nesciunt a! Ut ullam cum commodi ex ipsa quaerat?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga atque esse cupiditate culpa suscipit quidem. Nulla ratione delectus, illum veritatis voluptates voluptatibus, vitae dolor architecto dolorem quaerat magni neque at recusandae doloribus distinctio vel magnam blanditiis est mollitia fugiat, natus nesciunt a! Ut ullam cum commodi ex ipsa quaerat?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga atque esse cupiditate culpa suscipit quidem. Nulla ratione delectus, illum veritatis voluptates voluptatibus, vitae dolor architecto dolorem quaerat magni neque at recusandae doloribus distinctio vel magnam blanditiis est mollitia fugiat, natus nesciunt a! Ut ullam cum commodi ex ipsa quaerat?
          </ReactShowMoreText>
        </div>
      </div>

    )
  }
export default VideoMetaData
