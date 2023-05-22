import '../../App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft, faAddressCard, faEarthEurope, faTrophy,
  faShuffle, faStar, faHeart, faGlobe, faCircleInfo, faRightFromBracket, faQuestionCircle, faPeopleArrows
} from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { sidebarItems } from '../../helpers/sidebarItems';
import logo from '../../assets/img/logo.png';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

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
      <div className={`bg-sidebar-white h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
        <FontAwesomeIcon className={`bg-white text-dark-green text-3xl rounded-full absolute -right-2 top-11 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          icon={faCircleArrowLeft} onClick={() => setOpen(!open)} />

        <div className='inline-flex relative z-10 mb-3' style={{marginTop: '-80px'}}>
          <img className={`text-4xl cursor-pointer block mr-4 duration-500 text-dark-green`} alt='Logo' width={40} height={20} src={logo}></img>
          <h1 className={`text-dark-green origin-left font-extrabold text-2xl duration-300 ${!open && 'scale-0'}`}>GuideMyTour</h1>
        </div>

        <hr></hr>

        <ul className='ul-sidebar'>
          <li className='text-black-100 text-sm flex items-center gap-x-2 cursor-pointer hover:bg-light-white rounded-md mt-6'>
            <span className={`text-xl font-bold flex-1 ${!open && 'hidden'}`}>{sidebarItems[0].title}</span>
          </li>
          {sidebarItems[0].subItems.map((sidebarItem, index) => (
            <>

              <ul>
                <li key={index} className='text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-1'>
                  <FontAwesomeIcon className="text-black text-sm block float-left cursor-pointer" icon={sidebarIcons[sidebarItem.title]} />
                  <span className={`text-sm font-medium flex-1 ${!open && 'hidden'}`}>{sidebarItem.title}</span>
                </li>
              </ul>
            </>
          ))}
        </ul>

        <ul className='ul-sidebar'>
          <li className='text-black-100 text-sm flex items-center gap-x-2 cursor-pointer p-2 hover:bg-light-white rounded-md mt-4'>
            <span className={`text-xl font-bold flex-1 ${!open && 'hidden'}`}>{sidebarItems[1].title}</span>
          </li>
          {sidebarItems[1].subItems.map((sidebarItem, index) => (
            <>

              <ul>
                <li key={index} className='text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-1'>
                  <FontAwesomeIcon className="text-black text-sm block float-left cursor-pointer" icon={sidebarIcons[sidebarItem.title]} />
                  <span className={`text-sm font-medium flex-1 ${!open && 'hidden'}`}>{sidebarItem.title}</span>
                </li>
              </ul>
            </>
          ))}
        </ul>

        <ul className='ul-sidebar'>
          <li className='text-black-100 text-sm flex items-center gap-x-2 cursor-pointer p-2 hover:bg-light-white rounded-md mt-4'>
            <span className={`text-xl font-bold flex-1 ${!open && 'hidden'}`}>{sidebarItems[2].title}</span>
          </li>
          {sidebarItems[2].subItems.map((sidebarItem, index) => (
            <>

              <ul>
                <li key={index} className='text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-1'>
                    <FontAwesomeIcon className="text-black text-sm block float-left cursor-pointer" icon={sidebarIcons[sidebarItem.title]} />
                  <span className={`text-sm font-medium flex-1 ${!open && 'hidden'}`}>{sidebarItem.title}</span>
                </li>
              </ul>
            </>
          ))}
          <li>
            <button className="bg-dark-green hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-flex items-center">
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