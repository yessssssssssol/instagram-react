import React, { useState } from 'react';
import Comments from './Comments';

const Feed = ({ user }) => {
  const { name, email, id } = user;
  const [heart, setHeart] = useState(true);
  const [like, setLike] = useState('368');

  const handleHeartClick = (e, like) => {
    return setHeart(!heart);
    setLike('like + 1');
  };
  return (
    <div id='feeds'>
      <article>
        <div id='articleTop'>
          <div id='articleTopLeft'>
            <img
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              alt='profileImg'
            />
            <div className='id-location'>
              <div className='westagramId'>{name}</div>
              <div className='westagramLocate'>wework2호점</div>
            </div>
          </div>
          <div id='threeDot'>•••</div>
        </div>
        <div id='articleCenter'>
          <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt='firstmeal'
            id='feedImg'
          />
          <div>
            <div id='articleCenterIcon-L'>
              {heart ? (
                <img
                  onClick={handleHeartClick}
                  src='images/like.png'
                  alt='likeBtn'
                />
              ) : (
                <img
                  onClick={handleHeartClick}
                  src='images/liked.png'
                  alt='likeBtn'
                />
              )}
              <img src='images/comment.png' alt='commentBtn' />
              <img src='images/dm.png' alt='img' />
            </div>
            <div id='articleCenterIcon-R'>
              <img src='images/bookmark.png' alt='bookmark' />
            </div>
          </div>
        </div>
        <div id='articleBottom'>
          <div id='like'>{like}개</div>
          <div id='content'>
            <div className='westagramId'>{name}</div>
            <p>{email}</p>
          </div>
        </div>
        <Comments />
      </article>
    </div>
  );
};

export default Feed;