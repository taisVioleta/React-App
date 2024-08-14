
import Navbar from './components/Navbar.jsx';
import Astros from './components/astros/Astros.jsx';
import {Routes, Route} from "react-router-dom";
import './App.css'


function App() {

const links = [
  {id:1 , href: "/", text: "Home" },
  {id:2 , href: "/astros", text:"Astros"},
  {id:3 , href: "/apod", text: "APOD"},
];


  return (
    <>
    <Navbar links ={links}  />

    <Routes>
    <Route path="/"    element={<h1>Space-App</h1>} />
    <Route path="/astros" element={<Astros />} />
    </Routes> 
    </>
  )
}

export default App
