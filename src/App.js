import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Port from './Components/Port';
import Contact from './Components/Contact';
import images2 from "../src/Images/Image.png";
import My from "../src/Images/Image1.png"
import Myimg from "../src/Images/Image2.png"
function App() {
  const names =[
  {name:"Country quiz", img:images2},
  {Name:"Coffee page", imgg:My},
  {Nam:"Portfolio", imag:Myimg},

]
const elements = names.map(na=>{
  return <Port name={na.name} image={na.img}/>
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
