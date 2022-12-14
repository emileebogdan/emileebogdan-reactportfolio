import React from 'react';
import './css/portfolio.css';
import Project1 from '../assets/images/project1.png';
import NoteTaker from '../assets/images/notetaker.png';
import employeeTracker from '../assets/images/employeeTrackerScreenshot.png';
import Project2 from '../assets/images/project2.png';
import CodingQuiz from '../assets/images/gamescreenshot.png';
import Jot from '../assets/images/jot.png';


const PortfolioRow = (props) => {
  return (
    <a href={props.href}>
      <div className='portfolio'>{props.children}</div></a>
  )
}
export default function Portfolio() {
  return (
    <div className="container">
      Portfolio
      <PortfolioRow href="https://emileebogdan.github.io/project-1-travel-and-events/">
        <img src={Project1} alt="project1" />
        <h2> Project 1: Safety Search Site</h2>
      </PortfolioRow>
      <PortfolioRow href="https://the-ultimate-note-taker.herokuapp.com/">
        <img src={NoteTaker} alt="notetaker app" />
        <h2> Project 2: Note Taker App</h2>
      </PortfolioRow>
      <PortfolioRow href="https://github.com/emileebogdan/employee-tracker">
        <img src={employeeTracker} alt="employee tracker" />
        <h2> Project 3: SQL Employee Tracker</h2>
      </PortfolioRow>
      <PortfolioRow href="https://rplite.herokuapp.com/profile">
        <img src={Project2} alt="project1" />
        <h2> Project 4: RockDog, PaperSquirrel, ScissorCat</h2>
      </PortfolioRow>
      <PortfolioRow href="https://emileebogdan.github.io/Emilees-Coding-Quiz/">
        <img src={CodingQuiz} alt="coding quiz" />
        <h2> Project 5: Java Script Quiz</h2>
      </PortfolioRow>
      <PortfolioRow href="https://jotdown.herokuapp.com/">
        <img src={Jot} alt="jot it down" />
        <h2> Project 6: Jot it Down</h2>
      </PortfolioRow>
    </div>
  );
}
