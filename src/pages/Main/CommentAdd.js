import React from 'react';

const CommentAdd = ({ comment }) => {
  return (
    <div>
      <ul id='commentList'>
        <li className='comment-list'>
          <div className='comment-list-form'>
            <span className='comment-list-id'> hellohaileyworld </span>
            <span className='comment-list-item'>{comment}</span>
          </div>
          <div>
            <button type='button' className='edit-button'>
              edit
            </button>
            <button type='button' className='remove-button'>
              x
            </button>
            <img id='comment-like-btn' src='images/like.png' alt='likeButton' />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CommentAdd;
