import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
 

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2E6627';
      showAlert("dark mode activated","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode activated","success");
    }
    
    }
  
  return ( 
  <>
   
    <NavBar title="Textutils" abouttext="about utils" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <Router>
    <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>
}>
          </Route>
          
          <Route path="/textform" element={<TextForm heading='Enter the text to analyse'mode={mode} showAlert={showAlert} toggleMode={toggleMode}/> 
} >

          </Route>
    </Routes>
    </Router>
    {/* <About mode={mode} toggleMode={toggleMode}/>

    <TextForm heading='Enter the text to analyse'mode={mode} showAlert={showAlert} toggleMode={toggleMode}/> */}

  </> 
  );
}

export default App; 
