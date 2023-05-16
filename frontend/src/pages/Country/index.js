import React, { useState, useEffect } from 'react';
import { api } from '../../helpers/api';
import countryFlagRatios from '../../json/flag_ratios.json';
import populationData from '../../json/country_population.json';
import './index.css';
import Sidebar from '../../components/Sidebar/';
import PopulationChart from '../../components/PopulationCharts';
import CapitalCard from '../../components/CapitalCard';

const CountryPage = () => {
  const [country, setCountry] = useState(null);
  const [flagRatio, setRatio] = useState(null);
  const [flagHeight, setHeight] = useState(null);
  const [flagWidth, setWidth] = useState(null);

  useEffect(() => {
      const fetchCountry = async () => {
        const countryName = localStorage.getItem('country_name');

        if (countryName === 'China') {
          const res = await api.getCountryByName(countryName);
          setCountry(res[3]);
          return;
        }

        const res = await api.getCountryByName(countryName);
        console.log(res, 'res');
        setCountry(res[0]);
    };
    fetchCountry();
  }, []);

  return (
    <>
      {country &&
        <div className='flex'>
          <CapitalCard country={country}/>
        </div>
      }
    </>
  );
};

export default CountryPage;
