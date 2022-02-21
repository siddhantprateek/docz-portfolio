import React from 'react';
import '../styles/Hero.styles.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="hero-content">
                <p>Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown printer took a
					galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
            <img className='hero-img' src={`https://dev.quantumcloud.com/simple-business-directory/wp-content/uploads/2018/01/brianjohnsrud.jpg`} height="300px" alt="" />
        </div>
    )
}

export default Hero