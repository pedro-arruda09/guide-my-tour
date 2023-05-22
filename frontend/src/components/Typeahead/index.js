import './index.css'
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';
import searchPic from '../../assets/img/input_search.png';

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

    return (
        <div className='absolute search bg-transparent'>
            <div className="relative w-96">
                <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                    <img className="text-gray-500 dark:text-gray-400 mr-8" src={searchPic} width={40} height={20} alt='Input Search'></img>
                </div>
                <div>
                    <input type="search" id="default-search" className="block focus:outline-none w-full p-3 pl-6 text-sm text-gray-900 border rounded-full dark:placeholder-gray-400" placeholder="Where do you want to go?" value={inputSearch} onChange={handleFilter}></input>
                </div>
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