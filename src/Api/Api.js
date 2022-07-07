import axios from 'axios'

const baseUrl = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    if (country) {
        const response = await axios.get(`${baseUrl}/countries/${country}`)
        return response.data;
    }
    const response = await axios.get(`${baseUrl}`)
    return response.data;
}

export const fetchCountries = async () => {
    const response = await axios.get(`${baseUrl}/countries`)
    return response.data.countries.map((country) => country.name);
}

export const fetchDailyData = async () => {

    const response = await axios.get(`${baseUrl}/daily`);

    return response.data.map(({ confirmed, deaths, reportDate: date }) =>
        ({ confirmed: confirmed.total, deaths: deaths.total, date }));
}