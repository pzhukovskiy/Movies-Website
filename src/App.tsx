import React from 'react';
import { Home } from '@mui/icons-material';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <div>
      <Navbar>
        <Home/>
      </Navbar>
    </div>
  )
}

export default App