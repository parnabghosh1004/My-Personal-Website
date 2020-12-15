import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Projects from './components/Projects';
import SinglePost from './components/SinglePost';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/posts'>
        <Posts />
      </Route>
      <Route path='/post/:id'>
        <SinglePost />
      </Route>
    </div>
  );
}

export default App; 
