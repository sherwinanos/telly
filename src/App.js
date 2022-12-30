import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Wayfinder from './components/Wayfinder';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Masthead />
      <Wayfinder />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
