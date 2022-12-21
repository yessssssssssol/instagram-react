import React, { useState } from 'react';
import CommentAdd from './CommentAdd';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(comment);
      commentList.map(({ comment }) => <CommentAdd comment={comment} />);
    }
  };
  const createComment = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(comment);

    setCommentList((commentList) => [...commentList, comment]);
    console.log(commentList);
  };

  return (
    <form id='commentForm'>
      <div id='commentInputForm'>
        <input
          onChange={onChange}
          onKeyDown={onKeyDown}
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
