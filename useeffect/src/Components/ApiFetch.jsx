import React from "react";

const ApiFetch = () => {
  // Method 1
  const Method1 = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((rawdata) => {
      console.log(rawdata);
      return rawdata.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })
  };

  // method 2

  // method 3

  return (
    <>
      <h1>API Fetching Methods</h1>
      <div>
   
        <h1>Methods 1 : Fetch - then - then</h1>
        <button className="px-4 py-2 text-center rounded-md bg-black text-white focus:scale-95 " onClick={Method1}>Get Data</button>
      </div>


      <h1>Methods 2 : Async Await</h1>
      <h1>Methods 3 : Axios(Async Await)</h1>
    </>
  );
};

export default ApiFetch;
