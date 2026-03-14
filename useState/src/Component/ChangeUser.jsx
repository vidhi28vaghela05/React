import React, { useState } from "react";

const ChangeUser = () => {
  const [Data, setData] = useState({
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bQJmUE9JgxWCDBXOOGJS_MREVxMN2FDNMA&s",
    username: "Test User 1",
    role: "Tester",
    email: "test@gmail.com",
    background:"bg-teal-100"
  });
  // only change username and photo
  function Change() {
    let new_obj = {...Data}; // object copy
   if (Data.username === "Test User 1") {
     new_obj.username = "Test User 2";
    new_obj.photo="https://i.pinimg.com/236x/e0/ce/42/e0ce423a61a8d26eb307538b2be2007b.jpg";
    new_obj.background="bg-pink-100"
    setData(new_obj);
   } else {
     new_obj.username = "Test User 1";
    new_obj.photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bQJmUE9JgxWCDBXOOGJS_MREVxMN2FDNMA&s";
    new_obj.background="bg-teal-100"
    setData(new_obj);
   }
  }
  return (
    <>
      <section className="flex items-center justify-center mt-20">
        <div className={`w-full h-auto max-w-md px-6 py-4 ${Data.background} rounded-2xl text-center font-bold shadow-xl shadow-amber-200 flex flex-col gap-2 `}>
          <img
            src={Data.photo}
            className="w-44 h-44 object-cover rounded-full my-5 mx-auto"
          />
          <h1 className="text-2xl bg-teal-700 hover:bg-teal-400 text-center px-4 py-1 rounded-lg">
            {Data.username}
          </h1>
          <h2 className="text-2xl bg-teal-700 hover:bg-teal-400 text-center px-4 py-1 rounded-lg">
            {Data.role}
          </h2>
          <p className="text-2xl bg-teal-700 hover:bg-teal-400 text-center px-4 py-1 rounded-lg">
            {Data.email}
          </p>

          <button
            className="w-full text-2xl text-center py-1 px-4 bg-orange-400 hover:scale-95 hover:bg-orange-100 hover:text-teal-700 rounded-xl"
            onClick={Change}
          >
            Change User
          </button>
        </div>
      </section>
    </>
  );
};

export default ChangeUser;

// import React from "react";

// const ChangeUser = () => {
//   return (
//     <>
//       <section className="flex items-center justify-center mt-20">
//         <div className="w-full h-auto max-w-md px-6 py-4 bg-orange-200 rounded-2xl text-center font-bold shadow-xl shadow-amber-200 flex flex-col gap-2">
//           <img
//             src="https://i.pinimg.com/control1/736x/dd/dc/71/dddc71dd2bf73305211c6dcec7bb0342.jpg"
//             alt="photo"
//             className="w-44 h-44 object-cover rounded-full my-5 mx-auto"
//           />
//           <h1 className="text-2xl bg-teal-700 hover:bg-teal-400 text-center px-4 py-1 rounded-lg">Username</h1>
//           <h2 className="text-2xl bg-teal-700 hover:bg-teal-400 text-center px-4 py-1 rounded-lg">Role</h2>
//           <p className="text-2xl bg-teal-700 hover:bg-teal-400 text-center px-4 py-1 rounded-lg">email</p>

//           <button className="w-full text-2xl text-center py-1 px-4 bg-orange-400 hover:scale-95 hover:bg-orange-100 hover:text-teal-700 rounded-xl">Change User</button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ChangeUser;
