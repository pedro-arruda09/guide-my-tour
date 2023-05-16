import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';
import { api } from '../../helpers/api';
import './index.css';
import { EUROPE } from '../../helpers/europe';

const WorldMap = ({ country }) => {
  const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
  const [countries, setCountries] = useState([]);
  const [position, setPosition] = useState({ coordinates: [80, 70], zoom: 1.35 });
  const [tooltipContent, setTooltipContent] = useState('');
  const [countryName, setCountryName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await api.getCountries();
      setCountries(response);
    };
    fetchCountries();
  }, []);

  const handleCountryClick = (geo) => {
    const country = countries.find((c) => c.alpha3Code === geo.id);
    if (country) {
      localStorage.setItem('country_name', country.name);
      navigate(`/country/${encodeURIComponent((country.name).toLowerCase())}`);
    }
  };

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = position => {
    setPosition(position);
  };

  const handleMouseEnter = (geo) => {
    setTooltipContent('');
    const country = countries.find((c) => c.alpha3Code === geo.id);
    console.log(geo);
    if (country) {
        setCountryName(country.name);
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent('');
    setCountryName('');
  };

  // const array = ['ARG', 'BRA', 'URY', 'CHL', 'PRY', 'BOL', 'PER', 'ECU', 'COL', 'VEN', 'GUF', 'PAN', 'PRI', 'CUB',
                  // 'CRI', 'NIC', 'HND', 'SLV', 'GTM', 'BLZ', 'MEX', 'NTS'];

  return (
    <div className="overflow-hidden w-full h-full">
        <ComposableMap projection="geoMercator" style={{ backgroundColor: "white" }}>
            <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map((geo) => {
                  if (country === geo.properties.name) {
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => handleCountryClick(geo)}
                        onMouseEnter={() => handleMouseEnter(geo)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          default: {
                            fill: 'black',
                            outline: 'none',
                            stroke: 'aliceblue',
                            strokeWidth: 0.2,
                          },
                          hover: {
                            fill: '#F53',
                            outline: 'none',
                          },
                          pressed: {
                            fill: '#E42',
                            outline: 'none',
                          },
                        }}
                      />
                    );
                  } else {
                    return null;
                  }
                })
                }

            </Geographies>
            </ZoomableGroup>
        </ComposableMap>
        <div className="controls">
            <button onClick={handleZoomIn}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
            >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            </button>
            <button onClick={handleZoomOut}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
            >
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            </button>
        </div>

        <div className="tooltip" style={{ visibility: countryName ? 'visible' : 'hidden' }}>
            {countryName}
        </div>
    </div>
  );
};

export default WorldMap;