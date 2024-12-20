import React, { useState } from "react";

function ConverUC_LC(props) {
  const [text, setText] = useState("Enter something");
  const my = (e) => {
    setText(e.target.value.toUpperCase());
  };

  return (
    <>
      <div className="m-auto w-full h-screen">
        <div className="rounded-md  bg-slate-400   flex flex-col  justify-start items-center m-20 border border-sky-400 mx-h-auto py-2  w-96">
          <h1 className="border-b-orange-950  text-2xl">{props.heading}</h1>
          <label htmlFor="area" className="mt-10">
            <textarea
              name=""
              id="area"
              cols="30"
              rows="10"
              className="border-none outline-none border-blue-950 rounded-md "
              value={text}
              onChange={my}
            ></textarea>
          </label>
          <button className="border border-black p-2 rounded-md mt-1 bg-white">
            Lower-Upper{" "}
          </button>
          <button className="border border-black p-2 rounded-md mt-1 bg-white">
            Upper-Lower{" "}
          </button>
          <h2>{text.split(" ").length} and {text.length}</h2>
        </div>
      </div>
    </>
  );
}

export default ConverUC_LC;
