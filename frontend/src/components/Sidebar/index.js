import '../../App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import countriesData from '../../json/flag_ratios.json';
import {
  faCircleArrowLeft, faHouse, faUser, faGear, faAddressCard, faEarthEurope, faTrophy,
  faShuffle, faStar, faHeart, faGlobe, faCircleInfo, faRightFromBracket, faQuestionCircle, faPeopleArrows
} from '@fortawesome/free-solid-svg-icons';
import { api } from '../../helpers/api';
import './index.css'
import { sidebarItems } from '../../helpers/sidebarItems';

const Sidebar = (props) => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [flagHeight, setHeight] = useState(null);
  const [flagWidth, setWidth] = useState(null);
  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState('');

  // const getCountries = async () => {
  //   const res = await api.getCountries(search);
  //   setCountries(res);
  // }

  const getCountries = useCallback(async () => {
    if (search.length !== 0) {
      const res = await api.getCountryByName(search);
      setCountries(res);
    } else {
      const res = await api.getEuropeCountries();
      setCountries(res);
    }
  }, [search])

  useEffect(() => {
    if (props.country) {
      const countryToRatio = countriesData.find(c => c['Country'] === props.country)
      const ratio = countryToRatio['Ratio'];

      const [heightRatio, widthRatio] = ratio.split(":");
      const height = 25;
      const width = (height * widthRatio) / heightRatio;

      setHeight(height);
      setWidth(width);
    }

    getCountries();

  }, [props.country, getCountries]);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };

  const sidebarIcons = {
    "List of countries": faEarthEurope,
    "Most reviewed": faTrophy,
    "Pick random country": faShuffle,
    "My profile": faAddressCard,
    "Favorites": faHeart,
    "My reviews": faStar,
    "My countries": faGlobe,
    "About us": faCircleInfo,
    "FAQ": faQuestionCircle,
    "Become a contributor": faPeopleArrows
  };

  return (
    <div className='sidebar flex'>
      <div className={`bg-white h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
        <FontAwesomeIcon className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          icon={faCircleArrowLeft} onClick={() => setOpen(!open)} />

        <div className='inline-flex relative z-10'>
          {flagWidth && flagHeight &&
            <img className={`text-4xl rounded cursor-pointer block float-left mr-4 duration-500`} alt='Country Flag' width={flagWidth} height={flagHeight} src={props.flag}></img>
          }
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>{props.country}</h1>
        </div>

        <ul className='ul-sidebar'>
          <li className='text-black-100 text-sm flex items-center gap-x-4 cursor-pointer hover:bg-light-white rounded-md'>
            <span className='text-2xl block float-left'>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <span className={`text-3xl font-bold flex-1 ${!open && 'hidden'}`}>{sidebarItems[0].title}</span>
          </li>
          {sidebarItems[0].subItems.map((sidebarItem, index) => (
            <>

              <ul>
                <li key={index} className='text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2'>
                  <FontAwesomeIcon className="text-black text-sm block float-left cursor-pointer" icon={sidebarIcons[sidebarItem.title]} />
                  <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>{sidebarItem.title}</span>
                </li>
              </ul>
            </>
          ))}
        </ul>

        <ul className='ul-sidebar'>
          <li className='text-black-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-8'>
            <span className='text-2xl block float-left'>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className={`text-3xl font-bold flex-1 ${!open && 'hidden'}`}>{sidebarItems[1].title}</span>
          </li>
          {sidebarItems[1].subItems.map((sidebarItem, index) => (
            <>

              <ul>
                <li key={index} className='text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2'>
                  <FontAwesomeIcon className="text-black text-sm block float-left cursor-pointer" icon={sidebarIcons[sidebarItem.title]} />
                  <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>{sidebarItem.title}</span>
                </li>
              </ul>
            </>
          ))}
        </ul>

        <ul className='ul-sidebar'>
          <li className='text-black-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-8'>
            <span className='text-2xl block float-left'>
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span className={`text-3xl font-bold flex-1 ${!open && 'hidden'}`}>{sidebarItems[2].title}</span>
          </li>
          {sidebarItems[2].subItems.map((sidebarItem, index) => (
            <>

              <ul>
                <li key={index} className='text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2'>
                  <span className='text-2xl block float-left'>
                    <FontAwesomeIcon className="text-black text-sm block float-left cursor-pointer" icon={sidebarIcons[sidebarItem.title]} />
                  </span>
                  <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>{sidebarItem.title}</span>
                </li>
              </ul>
            </>
          ))}
          <li>
            <button class="bg-dark-green hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-flex items-center">
              <FontAwesomeIcon className="text-white text-sm block float-left cursor-pointer mr-2" icon={faRightFromBracket} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;