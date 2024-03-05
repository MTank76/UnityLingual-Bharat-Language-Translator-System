import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (


    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-8 p-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Unity Lingual Bharat</span>
      </Link>

      <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col font-3xl mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 bg-transparent ">

          <button className='text-white bg-transparent hover:text-black hover:bg-[#ffffff33] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 transition duration-500 ease-in-out hover:shadow-lg '>
            <Link to="/" className="  ">Home</Link>
          </button>
          <button className='text-white bg-transparent hover:text-black hover:bg-[#ffffff33] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 transition duration-500 ease-in-out hover:shadow-lg'>
            <Link to="/SpeechApp" className="">Transcribe</Link>
          </button>
          <button className='text-white bg-transparent hover:text-black hover:bg-[#ffffff33] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 transition duration-500 ease-in-out hover:shadow-lg'>
            <Link to="/TranslateApp" className="">Translate</Link>
          </button>
          <button className='text-white bg-transparent hover:text-black hover:bg-[#ffffff33] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 transition duration-500 ease-in-out hover:shadow-lg'>
            <Link to="/Maps" className="">Maps</Link>
          </button>
          <button className='text-white bg-transparent hover:text-black hover:bg-[#ffffff33] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 transition duration-500 ease-in-out hover:shadow-lg'>
            <Link to="/About" className="">About us</Link>
          </button>
        </ul>
      </div>
    </div>


  )
}

export default Navbar






