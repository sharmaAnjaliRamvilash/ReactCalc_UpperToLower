import React, { useRef, useState } from "react";

function Calculator(props) {
  const [value, setVal] = useState("");
  // const my=(e)=>{
  //  if(e.target.value=='='){
  //   setVal(eval(e.target.value+e.target.value));
  //  }
  //  else{
  //   window.alert("Add something value")
  //  }

  // }

  return (
    <>
        <h1>{props.val}</h1>
      <div>
      
        <input
          type="text"
          value={value}
          className="border border-r-8 p-3 rounded-md cursor-pointer "
          contentEditable="false"
        />
        <div className="gap-4 border p-4 m-4   bg-white">
          <div>
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4 cursor-pointer "
              value="1"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4 cursor-pointer "
              value="2"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4 cursor-pointer "
              value="3"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4  cursor-pointer "
              value="4"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4 cursor-pointer "
              value="5"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4  cursor-pointer "
              value="6"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4  cursor-pointer "
              value="00"
              onClick={(e) => setVal(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4 cursor-pointer  "
              value="7"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4  cursor-pointer "
              value="8"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4  cursor-pointer "
              value="9"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-500 p-4  cursor-pointer cursor-pointer "
              value="0"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-400 p-4 cursor-pointer  "
              value="+"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-400 p-4 cursor-pointer "
              value="-"
              onClick={(e) => setVal(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              className="border rounded-lg  bg-slate-400 p-4 cursor-pointer "
              value="*"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-400 p-4  cursor-pointer "
              value="/"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-400 p-4  cursor-pointer "
              value="%"
              onClick={(e) => setVal(value + e.target.value)}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-300 p-4  cursor-pointer "
              value="="
              // onClick={(e) => setVal(value + e.target.value)}
              onClick={()=>setVal(eval(value))}
              
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-300 p-4 cursor-pointer  "
              value="DC"
              onClick={() => setVal(value.slice(0,-1))}
            />
            <input
              type="button"
              className="border rounded-lg  bg-slate-300 p-4 cursor-pointer "
              value="AC"
              onClick={() => setVal(" ")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
