import React from 'react';
import githubLogo from '../assets/images/github.png';
import linkedIn from '../assets/images/linkedIn.png';
import stackOverflow from '../assets/images/stackoverflowg.png';


export default function Footer() {
  return (
    <div className="container">
        <a href="https://github.com/emileebogdan">
          <img style={{ height: 200 }} src={githubLogo} alt="github-logo" />
        </a>
        <a href="https://stackoverflow.com/users/20771312/emilee-bogdan">
        <img style={{ height: 100 }} src={stackOverflow} alt="stack-overflow" />
        </a>
        <a href="https://www.linkedin.com/in/emileebogdan/">
      <img style={{ height: 200 }} src={linkedIn} alt="linkedIn" />
      </a>
    </div>
  );
}
