import React from "react";

export default function Design() {
  return (
    <div>
      {/* <div className=" h-screen flex justify-between items-center"> */}
      {/* <div className=" h-screen flex justify-center items-end "> */}
      {/* <div className="flex justify-center "> */}
      {/* <div class="flex flex-row-reverse lex-col md:flex-row "> */}
      {/* <div class="flex flex-col md:flex-row ">
        <div className="w-14 h-16 bg-red-500 md:basis-1/5">01</div>
        <div className="w-16 h-16 bg-blue-500">02</div>
        <div className="w-16 h-16 basis-1/2 bg-green-400">03</div>
      </div> */}
      <br />
      {/* <div class=" h-screen flex flex-wrap "> */}
      <div className="flex justify-between flex-wrap  ">
        <div className="pl-3  mb-5 ">
          <div className="w-32 h-32   bg-green-400">yash</div>
        </div>
        <div className="h-32 w-32 p-12 border-4 bg-sky-500 hover:bg-sky-700">
          02
        </div>

        <div className="w-32 h-32 border-8 bg-red-500">01</div>
        <div className="w-32 h-32 flex items-center justify-center  bg-blue-500">
          02
        </div>
        <div className="w-32 h-32   bg-green-400">03</div>
        <div className="w-32 h-32 pt-4 bg-red-500">01</div>
      </div>
      <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Save changes
      </button>
      <br />
       <div className="m-7">
        <input type="text" className="  border border-blue-300 rounded-lg py-2 px-4
        focus:bg-red-200 w-full block "></input>
       </div>

       <div className=" opacity-25 cursor-move	 hover:opacity-100 w-32 h-32 bg-fuchsia-700 text-blue-500 items-center justify-center flex">box</div>

      <div className="m-6 flex flex-col justify-center items-center">
       <label className="text-sm text-yellow-50 font-bold select-none">FullName</label>
       <input className="mt-2 shadow border rounded-lg w-4/6 px-3 py-2 text-gray-700 focus:bg-blue-100" id="full" type="text" placeholder="Enter Full Name" />
       <button className="mt-2 py-2 px-3 bg-blue-800 text-blue-100 rounded-lg" >Save</button>
      </div>
    </div>
  );
}
