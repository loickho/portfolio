import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import './App.css';
import CV from './components/CV';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Welcome from './components/welcome';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll () {
    const position = window.scrollY;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className={scrollPosition > 20 ? 'small-welcome' : 'welcome'}>
        <Welcome scrollPosition={scrollPosition} />
      </div>
      <div className="content">
        <div className={`${scrollPosition > 20 ? 'show-navbar' : 'navbar'}`}>
          <Navbar scrollPosition={scrollPosition} />
        </div>
        <div className={`main-content ${scrollPosition > 25 ? 'show-content' : ''}`}>
          <Element name="about">
            <About />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="cv">
            <CV />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App
