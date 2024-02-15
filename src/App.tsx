import { Route, Routes } from 'react-router-dom';
import './assets/App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';

import { Link, Element } from 'react-scroll';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="Home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="About" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="Experiences" smooth={true} duration={500} offset={-20}>Experiences</Link>
          </li>
          <li>
            <Link to="Project" smooth={true} duration={500}>Project</Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Element name="Home">
        <section>
          <Home/>
        </section>
      </Element>
      <Element name="About">
        <section>
          <About/>
        </section>
      </Element>
      <Element name="Experiences">
        <section>
          <Experiences/>
        </section>
      </Element>
      <Element name="Project">
        <section>
          <Projects/>
        </section>
      </Element>
      <Element name="Contact">
        <section>
          <Contact/>
        </section>
      </Element>
    </>
  );
}

export default App;
