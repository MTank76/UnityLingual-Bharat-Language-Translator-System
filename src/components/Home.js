import React from 'react'
import IMAGES from '../img/image.jpg'
const Home = () => {
    return (

        <div style={{
            backgroundImage: `url(${IMAGES})`,
            height: '91vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        </div>

    )
}

export default Home

