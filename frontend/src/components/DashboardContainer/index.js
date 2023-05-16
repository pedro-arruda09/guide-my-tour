import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Typeahead from '../Typeahead';
import { EUROPE } from '../../helpers/europe';

const DashboardContainer = () => {
    return (
        <div className='dashboard-container flex justify-center items-center'>
            <ul className="flex grid-cols-4 gap-4 ul-dashboard top-0">
                <li>
                    <div className="flex items-center rounded-md mt-4 mb-2 py-2 px-2.5">
                        {/* <FontAwesomeIcon className="text-white test-lg block float-left cursor-pointer mr-2" icon={faSearch} /> */}
                        {/* <input type={"search"} placeholder='Search' className="text-base bg-transparent w-full text-white focus:outline-none" /> */}
                        <Typeahead data={EUROPE}/>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DashboardContainer