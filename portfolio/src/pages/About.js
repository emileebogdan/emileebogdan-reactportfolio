import React from 'react';
import ProfilePicture from '../assets/images/emilee.jpeg';

export default function About() {
  return (
    <div className="container">
        <h1>About</h1>
        <img src={ProfilePicture} alt="profile-picutre"/>
        <p>
        Emilee Bogdan worked in food service all through high school and college (For those of you counting that was about 10 years in food service. Not recommended by most chiropractors.) Emilee recieved her degree in Marketing from Weber State University in 2020 and has since never worked in Marketing. One day a good friend asked what Emilee wanted to be when she grew up and she didn't have an answer for that question. Then she was given advice to decide what brought her joy in her work and to do that for a work. Emilee then realized that working with technology brought her joy and started a Boot Camp to learn Full Stack Development. The rest is history. 
        </p>
    </div>
  );
}
