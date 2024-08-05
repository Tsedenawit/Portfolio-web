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
  {name:"Country quiz", img:images2, lin:"https://github.com/Tsedenawit/Quiz-main"},
  {Name:"Coffee page", imgg:My, lan:"https://github.com/Tsedenawit/Coffee"},
  {Nam:"Portfolio", imag:Myimg, linker:"https://github.com/Tsedenawit/Portfolio-web"},

]
const normalizedNames = names.map(na => {
  return {
    name: na.name || na.Name || na.Nam,
    img: na.img || na.imgg || na.imag,
    link: na.lin || na.lan || na.linker
  };
});

const elements = normalizedNames.map((na, index) => {
  return <Port key={index} name={na.name} image={na.img} links={na.link} />;
});
  return (
    <div className='max-w-full h-auto'>
      <Nav/>
    {/* <Home/>
     <About/> */}
     <div>
     <h2 className="text-5xl ml-20 mt-40">My Portfolio</h2>
     <div className="flex justify-between">
     {elements}
     </div>
     </div>
     <Contact/>
    </div>
  );
}

export default App;
