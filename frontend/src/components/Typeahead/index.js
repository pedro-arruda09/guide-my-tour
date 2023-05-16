import './index.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'

function Typeahead({ data }) {
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState("")
    const [filterSearch, setFilterSearch] = useState([])

    const handleFilter = (event) => {
        setInputSearch(event.target.value);

        const newFilter = data.filter(value => {
            return value.toLowerCase().includes(inputSearch.toLowerCase())
        })

        setFilterSearch(newFilter);
    }

    useEffect(() => {

        if (inputSearch === "") {
            setFilterSearch([]);
        }

    }, [inputSearch]);

    const handleClickAutoComplete = (value) => {
        setInputSearch(value);
        setFilterSearch([]);
        localStorage.setItem('country_name', value);
        navigate(`/country/${value}`);
    }

    function clearText() {
        setInputSearch("")
        setFilterSearch([])
    }

    return (
        <div className='search bg-white'>
            {/* <div className='flex items-center rounded-md search-div'>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon className="text-light-green test-lg block float-left cursor-pointer mt-1.5 ml-2" icon={faSearch} />
                </div>

                <input type={"search"} placeholder='Where do you want to go?' className="search-input w-max text-base bg-transparent text-dark-purple focus:outline-none" value={inputSearch} onChange={handleFilter} />
                <input type="text" className="block border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none dark:placeholder-gray-399 " placeholder="        Where do you want to go?" value={inputSearch} onChange={handleFilter}></input>
            </div> */}

            <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block focus:outline-none w-full p-3 pl-10 text-sm text-gray-900 border rounded-lg dark:placeholder-gray-400 " placeholder="Where do you want to go?" value={inputSearch} onChange={handleFilter}></input>
            </div>

            {filterSearch.length !== 0 &&
                <div className='dataResult'>
                    {filterSearch.slice(0, 15).map(value => (
                        <div key={value.id} className='dataItem' onClick={() => handleClickAutoComplete(value)}>
                            <IconContext.Provider value={{ color: "#B8B8B8", size: "22px" }}>

                            </IconContext.Provider>
                            <p className='text-ellipsis	whitespace-nowrap'>{value}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Typeahead;