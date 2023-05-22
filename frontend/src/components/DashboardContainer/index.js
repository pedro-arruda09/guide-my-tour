import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Typeahead from '../Typeahead';
import { EUROPE } from '../../helpers/europe';

const DashboardContainer = ({ children }) => {
    return (
        <div className='dashboard-container flex justify-center items-center overflow-y-auto'>
            <ul className="flex grid-cols-4 gap-4 ul-dashboard top-0">
                <li>
                    <div className="flex rounded-md mt-4 mb-2 py-2 px-2.5">
                        <div className='welcome absolute'>
                            <div className='text-2xl font-semibold whitespace-nowrap'>Welcome to GuideMyTour</div>
                            <div className='text-xl font-thin whitespace-nowrap'>Hello, Pedro. Let's enrich your next trip plans!</div>
                        </div>
                        <div className='typeahead absolute top-0'>
                            <Typeahead data={EUROPE}/>
                        </div>
                        <div className="buttons right-0 flex absolute">
                            <div className='mr-4'>
                                <button type="button" className="flex text-dark-green bg-white hover:bg-dark-green hover:text-white focus:outline-none rounded-full text-2xl px-2 py-2 text-center">
                                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                                </button>
                            </div>
                            <div>
                                <button type="button" className="flex text-dark-green bg-white hover:bg-dark-green hover:text-white focus:outline-none rounded-full text-2xl text-center">
                                    <img className="w-10 h-10 rounded-full p-0.5" src="https://flxt.tmsimg.com/assets/658334_v9_ba.jpg" alt="Rounded avatar"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            {children}
        </div>
    )
}

export default DashboardContainer