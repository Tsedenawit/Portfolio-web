import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Port from './Components/Port';
import BasicModal from './Components/Contact';
function App() {
  return (
    <div className='max-w-full h-auto'>
     {/* <Nav/>
     <Home/>
     <About/>*/}
     <Port/> 
     {/* <BasicModal/> */}
    </div>
  );
}

export default App;
