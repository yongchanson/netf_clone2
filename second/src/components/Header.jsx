import React from 'react';
// import '../home.css';

function Header() {
  return (
    
        <div class="header">
            <div class="logo" ><img src="img/logo.png" /></div>
            <div class="nav">
                <div class="navs">홈</div>
                <div class="navs">TV 프로그램</div>
                <div class="navs">영화</div>
                <div class="navs">NEW! 요즘 대세 콘텐츠</div>
                <div class="navs">내가 찜한 콘텐츠</div>
            </div>
            <div class="menu">
                <div class="menus"><i class="fas fa-search fa-2x"></i></div>
                <div class="menus"><i class="fas fa-bell fa-2x"></i></div>
                <div class="menus"><img src="img/profile.png" /></div>
                <div class="arrow"><i class="fas fa-caret-down"></i></div>                
            </div>
        </div> 


  );
}

export default Header;