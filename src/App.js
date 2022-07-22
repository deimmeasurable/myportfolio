import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Technologies from './components/Technologies'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <About />
      <Technologies/>
      <Contact/>
      <SocialLinks/> 
    </div>
  );
}

export default App;
