const input_location = document.querySelector('#input-location');
const clear_input = document.querySelector('#clear-input');
const container = document.querySelector('#today-forecast');

// Input text event
input_location.addEventListener('input', () => {
    if(input_location.value.length == "") {
        clear_input.classList.add('hidden');
    } else {
        clear_input.classList.remove('hidden');
    }

    clear_input.addEventListener('click', () => {
        input_location.value = "";
        input_location.focus();
        clear_input.classList.add('hidden');
    })
})

// Submit form event
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(input_location.value == "") {
        alert('Error')
    } else {
        getWeatherData();
    }

})

// Event for navigating today's forecast
document.querySelector('#back-btn').addEventListener('click', () => {
    container.scrollLeft -= 400;
})
document.querySelector('#next-btn').addEventListener('click', () => {
    container.scrollLeft += 400;
})

// Get weather info
async function getWeatherData() {
    try {
        const location = input_location.value;
        const url = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6d821c5e146e418e8d153725231008&q=${location}&days=7&aqi=no&alerts=no`);

        if(!url.ok) {
            const popup = document.querySelector('#popup');
            const overlay = document.querySelector('#overlay');
            
            popup.classList.remove('scale-0')
            overlay.classList.remove('opacity-0')
            overlay.classList.add('opacity-50')
            overlay.classList.remove('pointer-events-none')

            document.querySelector('#popup-btn').addEventListener('click', () => {
                popup.classList.add('scale-0')
                overlay.classList.remove('opacity-50')
                overlay.classList.add('opacity-0')
                overlay.classList.add('pointer-events-none')
                input_location.focus()
            })
        } else {
            const response = await url.json();
            const { location: { name, country } } = response;
            const { current: { cloud, condition: {icon, text}, temp_c, humidity, uv, wind_kph} } = response;
            const [ day_one, day_two, day_three ] = response.forecast.forecastday;
            const { astro: { sunrise, sunset } } = day_one;

            const hours = day_one.hour;
            const day = (dd) => {
                const date = new Date(dd);

                return date.toDateString().split(' ')[0];
            }
            const getHours = hours.map(hour => {
                return { temp: hour.temp_c, img: hour.condition.icon }
            })

            // Today forecast (hours)
            document.querySelector('#hour-0').setAttribute('src', getHours[0].img);
            document.querySelector('#hour-0-temp').innerText = Math.round(getHours[0].temp) + ' °C';
            document.querySelector('#hour-1').setAttribute('src', getHours[1].img);
            document.querySelector('#hour-1-temp').innerText = Math.round(getHours[1].temp) + ' °C';
            document.querySelector('#hour-2').setAttribute('src', getHours[2].img);
            document.querySelector('#hour-2-temp').innerText = Math.round(getHours[2].temp) + ' °C';
            document.querySelector('#hour-3').setAttribute('src', getHours[3].img);
            document.querySelector('#hour-3-temp').innerText = Math.round(getHours[3].temp) + ' °C';
            document.querySelector('#hour-4').setAttribute('src', getHours[4].img);
            document.querySelector('#hour-4-temp').innerText = Math.round(getHours[4].temp) + ' °C';
            document.querySelector('#hour-5').setAttribute('src', getHours[5].img);
            document.querySelector('#hour-5-temp').innerText = Math.round(getHours[5].temp) + ' °C';
            document.querySelector('#hour-6').setAttribute('src', getHours[6].img);
            document.querySelector('#hour-6-temp').innerText = Math.round(getHours[6].temp) + ' °C';
            document.querySelector('#hour-7').setAttribute('src', getHours[7].img);
            document.querySelector('#hour-7-temp').innerText = Math.round(getHours[7].temp) + ' °C';
            document.querySelector('#hour-8').setAttribute('src', getHours[8].img);
            document.querySelector('#hour-8-temp').innerText = Math.round(getHours[8].temp) + ' °C';
            document.querySelector('#hour-9').setAttribute('src', getHours[9].img);
            document.querySelector('#hour-9-temp').innerText = Math.round(getHours[9].temp) + ' °C';
            document.querySelector('#hour-10').setAttribute('src', getHours[10].img);
            document.querySelector('#hour-10-temp').innerText = Math.round(getHours[10].temp) + ' °C';
            document.querySelector('#hour-11').setAttribute('src', getHours[11].img);
            document.querySelector('#hour-11-temp').innerText = Math.round(getHours[11].temp) + ' °C';
            document.querySelector('#hour-12').setAttribute('src', getHours[12].img);
            document.querySelector('#hour-12-temp').innerText = Math.round(getHours[12].temp) + ' °C';
            document.querySelector('#hour-13').setAttribute('src', getHours[13].img);
            document.querySelector('#hour-13-temp').innerText = Math.round(getHours[13].temp) + ' °C';
            document.querySelector('#hour-14').setAttribute('src', getHours[14].img);
            document.querySelector('#hour-14-temp').innerText = Math.round(getHours[14].temp) + ' °C';
            document.querySelector('#hour-15').setAttribute('src', getHours[15].img);
            document.querySelector('#hour-15-temp').innerText = Math.round(getHours[15].temp) + ' °C';
            document.querySelector('#hour-16').setAttribute('src', getHours[16].img);
            document.querySelector('#hour-16-temp').innerText = Math.round(getHours[16].temp) + ' °C';
            document.querySelector('#hour-17').setAttribute('src', getHours[17].img);
            document.querySelector('#hour-17-temp').innerText = Math.round(getHours[17].temp) + ' °C';
            document.querySelector('#hour-18').setAttribute('src', getHours[18].img);
            document.querySelector('#hour-18-temp').innerText = Math.round(getHours[18].temp) + ' °C';
            document.querySelector('#hour-19').setAttribute('src', getHours[19].img);
            document.querySelector('#hour-19-temp').innerText = Math.round(getHours[19].temp) + ' °C';
            document.querySelector('#hour-20').setAttribute('src', getHours[20].img);
            document.querySelector('#hour-20-temp').innerText = Math.round(getHours[20].temp) + ' °C';
            document.querySelector('#hour-21').setAttribute('src', getHours[21].img);
            document.querySelector('#hour-21-temp').innerText = Math.round(getHours[21].temp) + ' °C';
            document.querySelector('#hour-22').setAttribute('src', getHours[22].img);
            document.querySelector('#hour-22-temp').innerText = Math.round(getHours[22].temp) + ' °C';
            document.querySelector('#hour-23').setAttribute('src', getHours[23].img);
            document.querySelector('#hour-23-temp').innerText = Math.round(getHours[23].temp) + ' °C';
            container.classList.remove('invisible');

            // Additional Information (below today forcast)
            document.querySelector('#city-name').innerText = name;
            document.querySelector('#country-name').innerText = country;
            document.querySelector('#weather-temp').innerText = Math.round(temp_c) + ' °C';
            document.querySelector('#weather-text').innerText = text; 
            document.querySelector('#weather-img').setAttribute('src', icon);
            document.querySelector('#weather-img').classList.remove('hidden');  
            document.querySelector('#humidity').innerText = humidity;
            document.querySelector('#uv-index').innerText = uv;
            document.querySelector('#sunrise').innerText = sunrise;
            document.querySelector('#wind-speed').innerText = Math.round(wind_kph) + ' km/h';
            document.querySelector('#cloud').innerText = cloud;
            document.querySelector('#sunset').innerText = sunset;

            // 3 Day Forecast (sidebar side)
            document.querySelector('#day-one-temp').innerText = Math.round(day_one.day.avgtemp_c) + ' °C';
            document.querySelector('#day-one-text').innerText = day_one.day.condition.text;
            document.querySelector('#day-one-img').classList.remove('invisible');
            document.querySelector('#day-one-img').setAttribute('src', day_one.day.condition.icon);
            document.querySelector('#day-two-temp').innerText = Math.round(day_two.day.avgtemp_c) + ' °C';
            document.querySelector('#day-two-text').innerText = day_two.day.condition.text;
            document.querySelector('#day-two-img').classList.remove('invisible');
            document.querySelector('#day-two-img').setAttribute('src', day_two.day.condition.icon);
            document.querySelector('#day-three-day').innerText = day(day_three.date);
            document.querySelector('#day-three-temp').innerText = Math.round(day_three.day.avgtemp_c) + ' °C';
            document.querySelector('#day-three-text').innerText = day_three.day.condition.text;
            document.querySelector('#day-three-img').classList.remove('invisible');
            document.querySelector('#day-three-img').setAttribute('src', day_three.day.condition.icon);

            clear_input.classList.add('hidden');
            input_location.value = "";
            input_location.focus();
        }
    } catch (error) {
        alert(errror)
    }
}