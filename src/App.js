import React from 'react';
import logo from './SallyStudent.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Page-header'>
        <h1>Sally Student's Resume</h1>
      </header>
      <header className="Contact-Info">
        <h3>Contact Info</h3>
      </header>
      <address>
        <ul>
          <li>Name: Sally Student</li>
          <li>Email <a href="mailto:sallystudent321@gmail.com">sallystudent321@gmail.com</a></li>
          <li>Phone: 555-555-1234</li>
        </ul>
      </address>
      <div className='imageDiv'>
        <img src={logo} alt="Sally Student head shot"></img>
      </div>
      <header className="Eduction">
        <h3>Education</h3>
      </header>
        <ul>
          <li>Brookhaven Junoir College</li>
          <li>Texas A&M</li>
        </ul>
      <header className="Employment">
        <h3>Employment</h3>
      </header>
      <section>
        <h4>Most recent</h4>
        <ul>
          <li><strong>Company:</strong> Google</li>
          <li><strong>Job Title:</strong> Software Developer</li>
          <li><strong>From:</strong> July 3, 2016 to November 8, 2019</li>
          <li><strong>Job Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</li>
        </ul>
      </section>
      <section>
        <h4>Next</h4>
        <ul>
          <li><strong>Company:</strong> Sunny Valley Software</li>
          <li><strong>Job Title:</strong> Programmer</li>
          <li><strong>From:</strong> April 10, 2010 to July 1, 2016</li>
          <li><strong>Job Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
