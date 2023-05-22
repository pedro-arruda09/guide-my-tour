import React from 'react';
import rocket from '../../../assets/img/rocket.png';
import './index.css';

const ReviewSavesCard = () => {
    return(
        <div className='review-saves-card rounded absolute ml-8'>
            <div className='div-h1-review-saves-card text-white'>
                <span className='font-medium'>Hey pedro, you have</span>
                <br></br>
                <span className='text-3xl font-bold'>1209</span>
            </div>
            <div className='absolute top-0 right-4'>
                <img alt='Rocket' width={150} height={150} src={rocket}></img>
            </div>
        </div>
    )
};

export default ReviewSavesCard;