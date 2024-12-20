import React, { useState } from 'react'
import Navbar from './component/Navbar/Navabar'
import ConverUC_LC from './component/Convert/ConverUC_LC'
import Calculator from './component/Calculator/Calculator'



function App() {
  const [theme,setTheme] = useState("light")
  const [dark,setdark]  = useState({
    color:"white",
    backgroundColor:"black"

  })
  const [light,setlight]  = useState({
    color:"black",
    backgroundColor:"white",
    height:"100vh",
    width:"100vw"


  })
  return (
    <>
    
   <div style={dark}>
   
    <Navbar theme={theme} setTheme={setTheme}/>
   </div>
 <div className='flex'>
 <div className="UpperTOLower">
    <ConverUC_LC heading="Change Upper Case to Lower Case"/>
   </div>
   <div className="cal flex  bg-slate-300  justify-between items-center flex-col flex-wrap h-fit m-20 border  rounded-2xl p-6 w-82">
    <Calculator val="Calculator"/>
   </div>
 
   
   
 </div>
 
   
    </>
  )
}

export default App

