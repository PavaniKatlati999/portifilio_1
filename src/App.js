import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MyWorks from './components/MyWork';
import Testimonal from "./components/Testimonal"
import Experinece from './components/Experince';
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />        
        <MyWorks/>
        <About/>
        <Skills />
        <Experinece />
        <Testimonal />
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
