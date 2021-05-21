import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contacts" component={ Contacts } />
        <Route path="/skills" component={ Skills } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
