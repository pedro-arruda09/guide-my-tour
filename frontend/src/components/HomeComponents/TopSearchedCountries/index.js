import React, { useState, useEffect } from 'react';
import { api } from '../../../helpers/api';
import { europeanUnion } from '../../../helpers/europeanUnion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const TopSearchedCountries = () => {
    const [countries, setCountries] = useState(null);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getCountries = async () => {
            const response = await api.getEuropeanUnionCountries();
            setCountries(response);
        };
        getCountries();
    }, []);

    let europeanUnionTopSearched = [];

    europeanUnion.forEach(country => {
        const item = countries?.find(c => c.name === country);
        if (item) {
            europeanUnionTopSearched.push(item);
        }
    });

    const PageSize = 11;
    const countriesPerPage = europeanUnionTopSearched.slice((currentPage - 1) * PageSize, currentPage * PageSize);
    const totalPages = Math.ceil(europeanUnionTopSearched.length / PageSize);
    const countryThirteen = europeanUnionTopSearched[currentPage * 11];

    const handleCountryClick = (countryName) => {
        navigate(`/country/${countryName}`);
    };

    return (
        <>
            {countries &&
                <div className='top-32 left-18 absolute'>
                    <div className='text-lg'>Top searched countries</div>
                    <div className='flex mt-4'>
                        <div className='left-0 absolute top-5 z-1 mr-2'>
                            <FontAwesomeIcon className={`bg-dark-green text-white text-xl px-2 py-1 rounded-full absolute -right-3 top-9 cursor-pointer ${currentPage === 1 && 'hidden'}`}
                                icon={faChevronLeft} onClick={() => setCurrentPage(currentPage - 1)}/>
                        </div>
                        <div className={`flex duration-500 ${currentPage !== 1 && 'ml-5'} ${currentPage !== totalPages && 'mr-3'}`}>

                            {countriesPerPage.map(country => (
                                <img alt='Europe countries flags' src={country.flags.svg} className="w-16 h-14 rounded object-cover mr-4 cursor-pointer" onClick={() => handleCountryClick(country.name)}></img>
                                ))}
                        </div>
                        { countryThirteen &&
                            <div className='gradient-overlay'>
                                <img alt='Europe countries flags' src={countryThirteen.flags.svg} className={`quarter-image w-16 h-14 rounded object-cover cursor-pointer ${currentPage === totalPages && 'hidden'}`}></img>
                            </div>
                        }
                        <div className='right-0 absolute top-5 z-1'>
                            <FontAwesomeIcon className={`bg-dark-green text-white text-xl px-2 py-1 rounded-full absolute right-6 top-9 cursor-pointer ${currentPage === totalPages && 'hidden'}`}
                                icon={faChevronRight} onClick={() => setCurrentPage(currentPage + 1)}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default TopSearchedCountries;