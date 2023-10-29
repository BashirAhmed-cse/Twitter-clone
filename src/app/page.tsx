import LeftSidebar from "@/components/LeftSidebar";
import Link from "next/link";
import {BsDot} from 'react-icons/bs';
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        {/* main content */}
        <main className="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-center space-x-2 border-gray-600  relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input
                type="text"
                className="w-full h-full  placeholder:text-gray-600 border-b-[0.5px] border-gray-600 p-4 bg-transparent outline-none border-none"
                placeholder="What's happening?"
              />

              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px] py-2">
                  <button
                    className="rounded-full w-full bg-primary px-4 py-2 text-lg text-center 
                       hover:bg-opacity-70 transition duration-200 font-bold"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
           {
            Array.from({length:5}).map((_,i)=>(
              <div key={i} className=" p-4 border-b-[0.5px] flex space-x-4">
                <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full"/>
                 </div>
                 <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-1">
                    <div className="font-bold">Bashir Ahmed</div>
                    <div>@bashir</div>
                    <div>
                      <BsDot/>
                    </div>
                    <div>1 hour ago</div>
                  </div>
                  <div className="text-white text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ab officiis pariatur? Accusamus facere sint deserunt totam, magnam suscipit. Debitis molestiae tempora, expedita tenetur maiores quod possimus perferendis rem numquam cumque ullam obcaecati delectus reiciendis quo non minus consequuntur? Beatae inventore saepe necessitatibus voluptate facilis placeat officiis est, corrupti ea vel sequi qui nam. Nobis doloribus consequatur cum architecto nisi assumenda quos esse neque soluta a deleniti, nulla cupiditate, maxime corporis delectus sunt possimus maiores necessitatibus reiciendis tenetur. Iure accusantium quae repellendus tempora mollitia magnam a sunt iusto. Quae atque, minus consequatur voluptate adipisci est accusamus similique iure! Voluptatibus, architecto?
                  </div>
                  <div className="bg-slate-400 aspect-square w-ful h-96 rounded-xl">

                  </div>
                 <div className="flex items-center space-x-2 w-full">
                  <div>C</div>
                  <div>R</div>
                  <div>L</div>
                  <div>S</div>
                  <div>SH</div>
                 </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        {/* <section>right section</section> */}
      </div>
    </div>
  );
};

export default Home;
