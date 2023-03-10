
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(0)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)


  }

  const toggleMode=() => {
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled", "success")
    }

    else 
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
  <>
     <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='conatiner my-3 mx-5'>
      {/* <Routes> */}
          {/* <Route exact path='/' element={ */}
          <TextForm heading=" Enter The Text To Analyze" mode ={mode} showAlert={showAlert} />
           {/* } /> */}
          {/* <Route exact path='/about' element={<About/>} /> */}
      {/* </Routes> */}
     </div>
    
    </>
  );
}

export default App;
