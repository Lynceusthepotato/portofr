import { Link, Element } from 'react-scroll';
import './assets/App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Projects  from './pages/Projects';

function App() {
  return (
    <>
      <nav>
        <Link to="Home" activeClass='active' spy={true} className='is-navbar-content' smooth={true} duration={500} offset={-10}>Home</Link>
        <Link to="About" activeClass='active' spy={true} className='is-navbar-content' smooth={true} duration={500}>About</Link>
        <Link to="Experiences" activeClass='active' spy={true} className='is-navbar-content' smooth={true} duration={500} offset={-50}>Experiences</Link>
        <Link to="Project" activeClass='active' spy={true} className='is-navbar-content' smooth={true} duration={500}>Project</Link>
        {/* <Link to="Contact" activeClass='active' spy={true} className='is-navbar-content' smooth={true} duration={500}>Contact</Link> */}
        <div style={{width:'5%'}}/> {/* only for style */}
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
      {/* <Element name="Contact">
        <section>
          <Contact/>
        </section>
      </Element> */}
    </>
  );
}

export default App;
