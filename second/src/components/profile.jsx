import React from 'react';
import '../profile.css';

function profile() {
  return (
    <>
    <div class="header">
        <div class="logo" ><img src="img/logo.png" /></div>
    </div> 

    <div class="profilelist">
        <h1 class="title">프로필 관리</h1>
        <div class="profile">
            <div class="prodetail">
                <div><img src="img/profile.png" /></div>
                <div class="proname">프로필1</div>
            </div>
            <div class="prodetail">
                <div><img src="img/profile2.png" /></div>
                <div class="proname">프로필2</div>
            </div>
            <div class="prodetail">
                <div><img src="img/profile3.png" /></div>
                <div class="proname">프로필3</div>
            </div>
            <div class="prodetail">
                <div><img src="img/profile4.png" /></div>
                <div class="proname">프로필4</div>
            </div>
            <div class="prodetail">
                <div><img src="img/profile5.png" /></div>
                <div class="proname">프로필5</div>
            </div>
        </div>
    </div>
    <button class="profilebtn">프로필 관리</button>

    </>
  );
}

export default profile;