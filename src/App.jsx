
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages.jsx/Home';
import Cricket from './Pages.jsx/Cricket.jsx';
import India from './Pages.jsx/India.jsx';

import Navbar from './components/Navbar';
import Politics from './Pages.jsx/Politics';
// import Politics from './Pages.jsx/Politics';
import Entertainment from './Pages.jsx/Politics';
import { useState } from 'react';


function App() {

    // we can get value outof function (usestate)
  const [value, setvalue] = useState('');  
  const handleClick=(ans)=>{
    console.log(ans)
    setvalue(ans)
      }
  return (
    <div className="App">
     <BrowserRouter>
     <div className=''style={{height:"70px",}}>
     <Navbar handleClick={handleClick}/>
     </div>
     <Routes>
    
<Route path='/' element={<Home ans={value}/>} />
      <Route path='/India' element={<India/>}/>
      <Route path='/Cricket' element={<Cricket/>} />
      {/* <Route path='/Single' element={<Singlepage/>} /> */}
      <Route path='/Entertainment' element={<Entertainment/>} />
      <Route path='/Politics' element={<Politics/>} />


     </Routes>
     </BrowserRouter>
   

    </div>

  );
}

export default App;
