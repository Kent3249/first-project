
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <main>
        <About />
        <main></main>
        <section></section>  
        <Projects />
        <main></main>
        <section></section>  
        <Contact />
        <a href="#top" className="back-to-top">Back to Top</a>
      </main>
        
      </header>
    </div>
  );
}

export default App;
