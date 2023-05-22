import React from 'react';
import { touristicSpots } from '../../../helpers/touristicSpots';
import './index.css';

const MySaves = () => {
    return (
        <div className='left-0'>
            <h1 className='my-saves-text absolute top-120'>My saves</h1>
            <div className="my-saves max-w-sm rounded shadow-lg absolute">
                <img className="my-saves-img" src={touristicSpots[0].image} alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{touristicSpots[0].place}</div>
                </div>
            </div>
        </div>
    )
};

export default MySaves;