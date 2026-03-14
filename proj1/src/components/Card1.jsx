import React from "react";
// import pikachu from "../assets/pikachu.jpg";
const Card1 = (props_c) => {
    console.log(props_c)
     return (
    <>
      {/* <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[320px] bg-white rounded-3xl shadow-xl p-4">

      
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
            alt="Nike Airforce"
            className="rounded-2xl"
          />

  
          <span className="absolute top-3 left-3 bg-white/70 text-sm px-3 py-1 rounded-full">
            Best Seller
          </span>

  
          <div className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold">
            NIKE
          </div>


          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white/70 rounded-full"></span>
            <span className="w-2 h-2 bg-white/70 rounded-full"></span>
            <span className="w-2 h-2 bg-white/70 rounded-full"></span>
          </div>
        </div>

  
        <div className="mt-4">
          <h2 className="text-xl font-bold">Nike Airforce1 Premium</h2>

          <p className="text-gray-500">Own the Airforce</p>

          <p className="text-gray-400 text-sm mt-1">
            Step back into classic hoops style with a durable leather.
          </p>

  
          <div className="flex items-center justify-between mt-4">
            <div className="bg-gray-200 px-4 py-2 rounded-full font-semibold">
              $111
            </div>

            <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800">
              Buy Now →
            </button>
          </div>
        </div>
      </div>
    </div> */}
      <div className="card bg-white w-full h-auto max-w-sm my-5 mx-6 py-4 px-6 border shadow-2xl shadow-cyan-950  rounded-2xl ">
        <div className="w-[320px] bg-white relative  rounded-3xl shadow-xl p-4 ">
          <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bQJmUE9JgxWCDBXOOGJS_MREVxMN2FDNMA&s"
            src={props_c?.cdata?.image}
            alt={props_c?.cdata?.title}
            className="w-full  h-72 rounded-2xl object-cover drop-shadow-2xl "
          />
          <div className="icon  flex items-center    gap-5 ">
            <span className="absolute top-6 left-6 bg-white/70 text-sm px-3 py-1 rounded-full">
             {props_c?.cdata?.badge}
            </span>
            <div className="absolute top-6 right-6 bg-white w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold">
             {props_c?.cdata?.brand}
            </div>
            <div className="absolute bottom-9 right-1 w-full flex justify-center items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white/70 rounded-full"></span>
              <span className="w-2 h-2 bg-white/70 rounded-full"></span>
              <span className="w-2 h-2 bg-white/70 rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">{props_c?.cdata?.title}</h2>

          <p className="text-gray-500">{props_c?.cdata?.subtitle}</p>

          <p className="text-gray-400 text-sm mt-1">
           {props_c?.cdata?.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="bg-gray-200 px-4 py-2 rounded-full font-semibold">
             {props_c?.cdata?.price}
            </div>

            <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800">
              Buy Now →
            </button>
          </div>
        </div>
      </div>
    </>
  );
 
};

export default Card1;
