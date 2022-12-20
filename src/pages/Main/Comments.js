import React, { useState } from 'react';
import CommentAdd from './CommentAdd';

const Comments = () => {
  const [comment, setComment] = useState('');
  const onChange = (e) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const createComment = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(setComment);
  };

  return (
    <form id='commentForm'>
      {setComment !== '' ? null : <CommentAdd setComment={setComment} />}
      <div id='commentInputForm'>
        <input
          onChange={onChange}
          id='comment'
          value={comment}
          placeholder='댓글 달기..'
        />
        <button onClick={createComment} id='commentSubmit' type='Submit'>
          게시
        </button>
      </div>
    </form>
  );
};

export default Comments;
