import Link from 'next/link';
import React from 'react';
import {BiHomeCircle, BiUser} from 'react-icons/bi';
import {BsBell, BsBookmark, BsTwitter, BsEnvelope} from 'react-icons/bs';
import {HiOutlineHashtag, HiDotsHorizontal} from 'react-icons/hi';

const navigationItems = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon:BiHomeCircle,
  },
  {
    title:'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon:BsBell,
  },
  {
    title: 'Messages',
    icon:BsEnvelope,
  },
  {
    title: 'Bookmarks',
    icon:BsBookmark,
  },
  {
    title: 'Profile',
    icon:BiUser,
  }
]

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
       <div className='max-w-screen-lg w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
           <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>            
                <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
                {navigationItems.map((item)=>(
                  <Link className='hover:bg-white/10 text-2xl transition duration-200 flex 
                  items-center justify-start space-x-4 w-fit rounded-3xl py-2 px-6' 
                  href={`/${item.title.toLowerCase()}`} 
                  key={item.title}>
                      <div>
                        <item.icon color='white'/>
                      </div>
                     
                        {item.title !== "Twitter" && <div className='text-white'>{item.title}</div>}
                      
                  </Link>
                ))
              }
              <button className="rounded-full bg-primary p-4 m-4 text-2xl text-center text-white 
              hover:bg-opacity-70 transition duration-200">
                Tweet
              </button>
                </div>
                <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 m-4 text-2xl text-center text-white 
                 hover:bg-white/10 transition duration-200 w-full justify-between">
                <div className='flex items-center space-x-2'>
                <div className='rounded-full bg-slate-400 w-12 h-12'></div>
                <div className='text-left text-sm'>
                   <div className='font-semibold'>Club of Coders</div>
                   <div className=''>@clubofoders</div>
                </div>
                </div>
                <div>
                  <HiDotsHorizontal/>
                </div>
              </button>                
            </section>
           <main>Home timeline</main>
           <section>right section</section>
       </div>
    </div>
  )
}

export default Home