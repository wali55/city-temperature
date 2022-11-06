// API key
const API_KEY = `7ec2afb7cc46da089bfacd06f99cbe89`;

// search temperature
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

// set inner text
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// display temperature
const displayTemperature = (data) => {
    // weather info
    setInnerText('city', data.name);
    setInnerText('temperature', data.main.temp);
    setInnerText('weather', data.weather[0].main);

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('image').setAttribute('src', url);
}