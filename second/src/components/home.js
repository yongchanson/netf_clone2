import React from 'react';
import '../home.css';
import Header from './Header';

function home() {
  return (
    <>
    <div class="home">
    <img class="mainimg" src="https://occ-0-2219-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfwMqJNGTyJmmO2j1SYmhTnkXs_evVlYQwRWGBrck_YanSF80VISKbFS5ROOIf_Pi4Jb_XrJq-oaEcksBxMQLkoBafg0.webp?r=3de" />
        <div class="overlay">
            <Header />    
            <div class="banner">
                <div class="batitle">
                    <img src="img/batitle.png" />
            </div>
            <div class="des">정신 바짝 차려라. 그 누구도 믿을 수 없다. 사생활 공유의 시대, 훔치고 조작하는 데 능한 사기꾼들이 어쩌다 거대한 전쟁에 뛰어든다. 국가의 사생활을 밝혀내기 위해서.</div>
            <div class="buttons">
                <div class="playbtn">
                    <i class="fas fa-play"></i>
                    재생
                </div>
                <div class="infobtn">
                    <i class="fas fa-info-circle"></i>
                    상세정보 
                </div>
            </div>
            <div class="age">
                
                <div class="rating">15+</div>
            </div>       
        </div>

    </div>
    <div class="categorylist">
        <div class="category">
            <div class="catetitle">넷플릭스 인기 콘텐츠</div>
            <div class="movielist">
                <div class="movie">
                    <img src="img/DP.jpg" />
                </div>
                <div class="movie">
                    <img src="img/sweethome.jpg" />
                </div>
                <div class="movie">
                    <img src="img/itaewon.jpg" />
                </div>
                <div class="movie">
                    <img src="img/movetoheaven.jpg" />
                </div>
                <div class="movie">
                    <img src="img/dobongsoon.jpg" />
                </div>
                <div class="movie">
                    <img src="img/solo.jpg" />
                </div>
                <div class="movie">
                    <img src="img/brother.jpg" />
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  );
}

export default home;