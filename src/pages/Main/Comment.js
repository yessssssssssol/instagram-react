import React from 'react';

const Comments = () => {
  return (
    <form id='commentForm'>
      <ul id='commentList'></ul>
      <div id='commentInputForm'>
        <input id='comment' placeholder='댓글 달기..' />
        <button id='commentSubmit' type='Submit'>
          게시
        </button>
      </div>
    </form>
  );
};

export default Comments;
