import React from 'react';

import profile from './profile.jpg';

function Home() {
  return (
    <div className="Home">
      <div className="name">
        <h1>Hello,</h1>
        <h2>I am Aloysius Hasheem A. Sendad</h2>
      </div>
      <div className="imgContainer">
        <img className="image" src={profile} alt="ProfilePicture"/>
      </div>
    </div>
  );
}

export default Home;
