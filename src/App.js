import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Port from './Components/Port';
import Contact from './Components/Contact';
function App() {
  return (
    <div className='max-w-full h-auto'>
     <Nav/>
     <Home/>
     <About/>
     <h2 className="text-6xl ml-20 mt-40">My Portfolio</h2>
     <div className="flex justify-between">
     <Port name="Country Quiz" /> 
     <Port name="Country Quiz" /> 
     <Port name="Country Quiz" /> 
     <Port name="Country Quiz" /> 
     </div>
     <Contact/>
    </div>
  );
}

export default App;
