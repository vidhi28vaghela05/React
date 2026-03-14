import React, { useState } from "react";

const Increase = () => {
  const [number, setnumber] = useState(0);
  // number ==> read only
  // setnumber ==> write only (jo number ni value change karvi hoy to setnumber no use karvo)

  function IncreaseNum() {
    // let newnumber = number+1;
    setnumber(number + 1);
  }
  function DecreaseNum() {
    // let newnumber = number+1;
    if (number !== 0) {
      return setnumber(number - 1);
    }
  }
  function Jump5_forword() {
    // let newnumber = number+1;
    setnumber(number + 5);
  }
  function Jump5_backword() {
    // let newnumber = number+1;
    if (number >= 5) {
      return setnumber(number - 5);
 
    }else{
      setnumber(0);
    }
  }
  // console.log(number);

  return (
    <>
      <section className="py-15">
        <h1 className="text-4xl text-center font-extrabold">
          UseState == data that can change (data ne change karvo)
        </h1>
        <p className="text-2xl py-3 font-bold text-center">
          Increase and decrease Counter
        </p>
        <div className="w-72 h-72 border bg-[#555] text-9xl font-extrabold rounded-xl py-2 px-4  flex items-center justify-center text-[#222] mx-auto">
          {number}
        </div>
        <div className="flex justify-center items-center mt-5 gap-5">
          <button
            className="bg-[#555] px-4 py-1 text-center rounded-lg w-54 h-12 text-xl "
            onClick={IncreaseNum}
          >
            Increase
          </button>
          <button
            className="bg-[#555] px-4 py-1 text-center rounded-lg w-54 h-12 text-xl "
            onClick={DecreaseNum}
          >
            Decrease
          </button>
          <button
            className="bg-[#555] px-4 py-1 text-center rounded-lg w-54 h-12 text-xl "
            onClick={Jump5_forword}
          >
            jump5 forword
          </button>
          <button
            className="bg-[#555] px-4 py-1 text-center rounded-lg w-54 h-12 text-xl "
            onClick={Jump5_backword}
          >
            jump5 backword
          </button>
        </div>
      </section>
    </>
  );
};

export default Increase;
