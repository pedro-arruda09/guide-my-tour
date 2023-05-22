import React, { useState, useEffect } from 'react';
import { api } from '../../helpers/api';
import DashboardContainer from '../../components/DashboardContainer';
import { useParams } from 'react-router-dom';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import hotel from '../../assets/img/hotel.png';
import restaurant from '../../assets/img/restaurant.png';
import amusement from '../../assets/img/amusement.png';
import night from '../../assets/img/night.png';
import './index.css';

const CountryPage = () => {
  const [country, setCountry] = useState(null);
  const { countryName } = useParams();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const fetchCountry = async () => {
      if (countryName === 'China') {
        const res = await api.getCountryByName(countryName);
        setCountry(res[3]);
        return;
      }

      const res = await api.getCountryByName(countryName);
      setCountry(res[0]);
    };
    fetchCountry();
  }, [countryName]);

  const getPlaces = async () => {
    const test = await api.getFlights();
    return test;
  };

  const center = { lat: country?.latlng[0], lng: country?.latlng[1] };

  const categories = [
    { name: 'Hotels', picture: hotel, width: 40, height: 40 },
    { name: 'Restaurants', picture: restaurant, width: 35, height: 35 },
    { name: 'Amusement', picture: amusement, width: 35, height: 35 },
    { name: 'Nights and Drinks', picture: night, width: 37, height: 37 }
  ];

  return (
    <DashboardContainer>
      {country && isLoaded &&
        <div className='country-card w-12'>
          <img alt='Country flag' className='country-flag object-cover' src={country.flags.svg} onClick={getPlaces}></img>
          <div className='map-div'>
            <GoogleMap mapContainerClassName='map' center={center} zoom={5}
              options={{
                streetViewControl: false,
                mapTypeControl: false
              }}
            ></GoogleMap>
          </div>
        </div>
      }
      <div className='search-category absolute'>
        <h1 className='text-black'>Search by category</h1>
        <div className='grid-cols-5 mt-4 flex'>
          {categories.map(category => (
            <button className='button-category border mr-8 bg-white py-2 w-44 px-4 rounded-lg flex flex-col items-center'>
              <img alt='Hotel' className='font-bold' src={category.picture} width={category.width} height={category.height}></img>
              <span className='whitespace-nowrap'>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <h1 className='text-black'>TESTE</h1>
      </div>
    </DashboardContainer>
  );
};

export default CountryPage;
