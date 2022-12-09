import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import ScTable from './components/table/Table'
import { GlobalStyle } from "./globalStyles";
import { Navbar } from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/Sidebar';

const socket = io('http://192.168.1.103:4000', { secure: true, reconnection: true, rejectUnauthorized: false })


function App() {
  const [uncanceled, setUncanceled] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  socket.on("connect_error", (err) => {
    console.log(`error en la conexion ${err.message}`);
  });

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    socket.on('uncanceledList', message => setUncanceled(message))
  }, [])

  return (
    <div className="App">

      <Router>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <GlobalStyle />
        <div className="table-container">
          <ScTable data={uncanceled} />
        </div>
      </Router>
    </div>

  );
}


export default App;
