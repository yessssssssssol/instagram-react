import React from 'react';
import MainSide from './MainSide';
import Nav from '../../components/Nav/Nav';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <Nav />
      <div>
        <main>
          <div id='feeds'>
            <article>
              <div id='articleTop'>
                <div id='articleTopLeft'>
                  <img src='images/profile.jpeg' />
                  <div className='id-location'>
                    <div className='westagramId'>hi._.hailey</div>
                    <div className='westagramLocate'>wework2호점</div>
                  </div>
                </div>
                <div id='threeDot'>•••</div>
              </div>
              <div id='articleCenter'>
                <img src='images/main.jpeg' alt='firstmeal' id='feedImg' />
                <div>
                  <div id='articleCenterIcon-L'>
                    <img src='images/like.png' />
                    <img src='images/comment.png' />
                    <img src='images/dm.png' />
                  </div>
                  <div id='articleCenterIcon-R'>
                    <img src='images/bookmark.png' />
                  </div>
                </div>
              </div>
              <div id='articleBottom'>
                <div id='like'>좋아요 368개</div>
                <div id='content'>
                  <div className='westagramId'>hi._.hailey</div>
                  <p>첫 날 시이작-!</p>
                </div>
              </div>
              <form id='commentForm'>
                <ul id='commentList'></ul>
                <div id='commentInputForm'>
                  <input id='comment' placeholder='댓글 달기..' />
                  <button id='commentSubmit' type='Submit'>
                    게시
                  </button>
                </div>
              </form>
            </article>
          </div>
          <MainSide />
        </main>
      </div>
    </div>
  );
};

export default Main;
