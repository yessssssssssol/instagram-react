import React, { useState } from 'react';

import CommentEdit from './CommentEdit';

const CommentAdd = ({ comment }) => {
  const [heart, setHeart] = useState(true);

  const handleHeartClick = () => {
    return setHeart(!heart);
  };

  const onClickEdit = (e) => {
    // editComment(comment);
    return <CommentEdit comment={comment} />;
  };

  const onClickDelete = (e) => {
    return e.target.parentElement.parentElement.remove();
  };

  return (
    <div>
      <ul id='commentList'>
        <li className='comment-list'>
          <div className='comment-list-form'>
            <span className='comment-list-id'> hellohaileyworld </span>
            <span className='comment-list-item'>{comment}</span>
          </div>
          <div>
            <button onClick={onClickEdit} type='button' className='edit-button'>
              edit
            </button>
            <button
              onClick={onClickDelete}
              type='button'
              className='remove-button'
            >
              x
            </button>
            {heart ? (
              <img
                onClick={handleHeartClick}
                value={heart}
                id='comment-like-btn'
                src='images/like.png'
                alt='likeButton'
              />
            ) : (
              <img
                onClick={handleHeartClick}
                value={heart}
                id='comment-like-btn'
                src='images/liked.png'
                alt='likedButton'
              />
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CommentAdd;
