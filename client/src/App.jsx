import axios from 'axios';
import "./App.css"
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const handleClick = () => {
    axios.get('http://localhost:5000/welcome')
      .then(res => setMessage(res.data))
      .catch(err => console.log(err));
  };
  return (
    <div className="App">
      <h1>Welcome to the Dojo</h1>
      <h2>Let&apos;s get started</h2>
      <button onClick={handleClick}>Click Here</button>
      <p>{message}</p>
    </div>
  );
}
export default App;
