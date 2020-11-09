import {Route, HashRouter as BrowserRouter} from 'react-router-dom' 
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Apps from './pages/Apps'
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav/>
      <div class="container">
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route exact path="/aboutme" component={AboutMe}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/apps" component={Apps}/>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
