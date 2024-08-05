import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Port from './Components/Port';
import Contact from './Components/Contact';
function App() {
  const names =[
  {name:"Country quiz"},
  {Name:"Coffee page"},
  "Portfolio"

]
const elements = names.map(na=>{
  return <Port name={na.Name}/>
})
  return (
    <div className='max-w-full h-auto'>
     <Nav/>
     <Home/>
     <About/>
     <div className="flex justify-between">
     {elements}
     </div>
     <Contact/>
    </div>
  );
}

export default App;
