import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = //It's a security of my key. You can create your key and add it here.

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
