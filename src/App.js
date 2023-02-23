import './App.css';
import { useState } from 'react';
// import BoxGen from './components/BoxGen';
import Form from './components/Form';
import Display from './components/Display';
import SenseiForm from './components/SenseiForm';
import SenseiDisplay from './components/SenseiDisplay';

function App() {
  
  const [newBox, setNewBox] = useState({
    newColor: "",
    hW: ""
})

const [newBoxSize, setNewBoxSize] = useState({
  newColor: "",
  hW: ""
})

const [colorList, setColorList] = useState([])
const [colorListSize, setColorListSize] = useState([])

  return (
    <div className="App">
      {/* <BoxGen/> */}
      <h1>Type a color!</h1>
        <Form newBox={newBox} setNewBox={setNewBox} colorList={colorList} setColorList={setColorList}/>
        <Display colorList={colorList}/>

      <h1>Type a color and choose a box size</h1>
        <SenseiForm newBoxSize={newBoxSize} setNewBoxSize={setNewBoxSize} colorListSize={colorListSize} setColorListSize={setColorListSize}/>
        <SenseiDisplay colorListSize={colorListSize}/>
    </div>
  );
}

export default App;
