import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <div className='max-w-full h-auto'>
     <Nav/>
     <Home/>
     <About/>
    </div>
  );
}

export default App;
