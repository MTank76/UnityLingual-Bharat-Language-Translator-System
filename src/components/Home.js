
import React from 'react'
import './home.css'
import logo from '../img/tranaslator2.png';
import { Link } from 'react-router-dom'

const Home = () => {
    return (


        <div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div className='container'>
                <div className=''>

                    <p className='text'>
                        Unity Lingual Bharat
                    </p>
                    <p className='text2'>
                        UnityLingual Bharat breaks India's language barriers <br />
                        with ensuring seamless communication, supporting diverse <br />
                        languages and dialects for an enriched travel experience.
                    </p>
                    <button className='text-black bg-[#30eee2] font-medium ml-20 mt-4 rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 hover:shadow-lg '>
                        <Link to="/TranslateApp">Explore</Link>
                    </button>
                </div>
                <div className='image'>

                    <img src={logo} alt="Logo" />;
                </div>
            </div>
        </div>


    )
}

export default Home
{/* <img className='  h-[32rem] w-[30rem] ml-[61rem] ' src={logo} alt="Translator" />; */ }

