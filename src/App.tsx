import { Link, Element } from 'react-scroll';
import './assets/App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Experiences, { Card } from './pages/Experiences';
import Projects  from './pages/Projects';

// components
import CustomModal from './components/modal/CustomModal';
import { useState } from 'react';

function App() {
  const [isModalVisible, setIsModalVisilble] = useState(false);
  const [modalType, setModalType] = useState(0);
  const [currentCard, setCurrentCard] = useState<Card>();
  const [modalTheme, setModalTheme] = useState<React.CSSProperties>();

  const closeModal = () => {
    setIsModalVisilble(false);
  }

  const handleModal = (visible:boolean, type?: number, card?: Card, modaltheme?: React.CSSProperties) => {
    setIsModalVisilble(visible);
    if (typeof(type) === 'number') {
      setModalType(type);
    }
    if (card) {
      setCurrentCard(card);
    }
    if (modaltheme) {
      setModalTheme(modaltheme);
    }
  }

  const handleModalChange = (type: number) => {
    setIsModalVisilble(!isModalVisible);
    handleModal(true, type);
  }

  return (
    <>
      <CustomModal 
        isOpen={isModalVisible} 
        onClose={closeModal}
        handleMultipleModal={handleModalChange}
        type={modalType} 
        card={currentCard}
        contentTheme={modalTheme}
        // modalContentStyle={{width:'85vw', padding: '10px'}}
      />
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
          <Home showModal={handleModal}/>
        </section>
      </Element>
      <Element name="About">
        <section>
          <About showModal={handleModal}/>
        </section>
      </Element>
      <Element name="Experiences">
        <section>
          <Experiences showModal={handleModal}/>
        </section>
      </Element>
      <Element name="Project">
        <section>
          <Projects showModal={handleModal}/>
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
