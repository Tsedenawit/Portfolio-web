import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Port from './Components/Port';
import Contact from './Components/Contact';
function App() {
  const names =[
  "Country quiz",
  "Coffee page",
  "Portfolio"

]
  return (
    <div className='max-w-full h-auto'>
     <Nav/>
     <Home/>
     <About/>
     <div className="flex justify-between">
     <Port name="Country Quiz" /> 
     </div>
     <Contact/>
    </div>
  );
}

export default App;
