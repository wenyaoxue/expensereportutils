import './App.css';
import RouteDefs from './components/RouteDefs';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [color1, setColor1] = useState("#FFFACD")
  const [textcolor1, setTextColor1] = useState("#000000")
  const [color2, setColor2] = useState("#E0FFFF")
  const [textcolor2, setTextColor2] = useState("#000000")
  return (
    <div>
        <Header setColor1={setColor1} setColor2={setColor2} setTextColor1={setTextColor1} setTextColor2={setTextColor2}/>
        <RouteDefs color1={color1} color2={color2} textcolor1={textcolor1} textcolor2={textcolor2}/>
    </div>
  );
}

export default App;
