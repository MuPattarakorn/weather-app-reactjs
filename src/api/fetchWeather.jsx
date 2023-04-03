import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = '63a5023941139a34dbe4b31a6aa10fb8'

const fetchWeather = async (query) => {
    const { data } = await axios.get(url, {
        params: {
            q: query,
            units: 'metric',
            APPID: key
        }
    });
    return data;
}

export default fetchWeather
