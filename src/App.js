import './App.css';
import {useState} from 'react'
import {Modal} from './utils/Modal.js'

function App() {
const [open, setOpen] = useState(false)

const toggle = () => {
setOpen(!open)
}

  return (
    <div className="App">
      <p>click</p>
      {/* On click it calls a function that adds a class */}
      <button onClick={toggle}>Modal</button>
      {open ? (Modal()):(null)}
    </div>
  );
}

export default App;