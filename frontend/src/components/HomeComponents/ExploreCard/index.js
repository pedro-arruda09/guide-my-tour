import './index.css';
import React from 'react';
import exploreImage from '../../../assets/img/explore-card-img.jpg';

const ExploreCard = () => {
    return (
        <div className="explore-card rounded absolute">
            <img className="w-full img-explore-card rounded-lg" src={exploreImage} alt="Sunset in the mountains"></img>
            <div className='explore-card-text top-24 left-48 text-white'>
                <span className='whitespace-nowrap font-bold text-xl mb-8'>
                    EXPLORE THE WORLD WITH US
                </span> <br></br>
                <span>
                    Follow thousands of recommendations from our users
                </span><br></br>
                <button className='button-explore-card text-white bg-lemon mt-10 rounded-lg inline-flex whitespace-nowrap text-center py-2 px-4 items-center'>
                    Start exploring
                </button>
            </div>
        </div>
    )
};

export default ExploreCard;