import React from 'react';
import './style.css';

//            component : 푸터 컴포넌트                //
export default function Footer() {

  //            event handler : 아이콘 버튼 클릭 이벤트 처리 함수             //
  
  // 기존 창에서 뜨는 이벤트
  const onInstaIconClickHandler = () => {
    window.location.href = 'https://www.instagram.com/';
  }

  // 새창으로 뜨는 이벤트
  const onNaverIconClickHandler = () => {
    window.open('https://blog.naver.com');
  }
  
  


  //            render : 푸터 컴포넌트 랜더링            //
  return (
    <div id='footer'>
    <div className='footer-top'>
        <div className='footer-logo-box'>
          <div className='footer-logo-icon-box'>
            <div className='logo-right-icon'></div>
          </div>
          <div className='footer-logo-text'>Hoons Board</div>
        </div>
        <div className='footer-link-box'>
          <div className='email-link'>{'email@naver.com'}</div>
          <div className='icon-button' onClick={onInstaIconClickHandler}>
            <div className='insta-icon'></div>
          </div>
          <div className='icon-button' onClick={onNaverIconClickHandler}>
            <div className='naver-blog-icon'></div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-copyright'>{'Copyright © 2022 Jukoyakki. All Rights Reserved.'}</div>
      </div>
    </div>
  )
}
