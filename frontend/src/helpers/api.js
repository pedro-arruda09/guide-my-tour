import axios from 'axios';

const clientId = 'cd51e6f5888e451ea5418ce1cbdf1b4f';
const clientSecret = 'e699831a593f40c6933a5820fcc03e55';

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
    }
}