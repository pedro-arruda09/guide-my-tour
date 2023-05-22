import axios from 'axios';
import { europeanUnion } from './europeanUnion';

const clientId = 'cd51e6f5888e451ea5418ce1cbdf1b4f';
const clientSecret = 'e699831a593f40c6933a5820fcc03e55';
const API_KEY = 'AIzaSyBCNYMlr8RodJ-xJGuk86LgBtXKrNleEaw';

export const api = {
    getCountries: async() => {
        try {
            const res = await axios.get('https://restcountries.com/v2/all');
            const countries = res.data;
            return countries;
        } catch(e) {
            console.log(e);
        }
    },

    getCountryByName: async(name) => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            const countries = res.data;
            return countries;
        } catch(e) {
            console.log(e);
        }
    },

    getCountriesSidebar: async(name) => {
        try {
            if (name !== '') {
                const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
                const countries = res.data;
                return countries;
            } else {
                const res = await axios.get('https://restcountries.com/v3.1/all');
                const countries = res.data;
                return countries;
            }
        } catch(e) {
            console.log(e);
        }
    },

    getEuropeCountries: async() => {
        try {
            const res = await axios.get('https://restcountries.com/v2/region/europe')
            const europeCountries = res.data;
            return europeCountries;
        } catch(e) {
            console.log(e);
        }
    },

    getEuropeanUnionCountries: async() => {
        try {
            const res = await axios.get('https://restcountries.com/v2/region/europe');
            const europeanUnionCountries = res.data.filter(country => europeanUnion.includes(country.name));
            return europeanUnionCountries;
        } catch(e) {
            console.log(e);
        }
    },

    getFlights: async() => {
        try {
            const res = await axios.get('https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200', {
                headers: { Authorization: 'Bearer PTxGR641whyrlQ0JufzMJDWZbs8W' }
            });
            const json = await res.json();
            return json;
        }catch(e) {
            console.log(e);
        }
    }
}