const button = document.getElementById('button')
const input = document.getElementById('input')
const api = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const apiKey = "your openWeatherMap api key";
let container = document.getElementById('container');
const icon = document.getElementById('icon-w')
const bottom = document.getElementById('bottom')
const left = document.getElementById('left')
const lower = document.getElementById('lower')

button.addEventListener('click', function () {
    const userId = input.value
    console.log(userId);
    fetch(`${api}&q=${userId}&appid=${apiKey}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].main);
            const change = data.weather[0].main;
            left.innerHTML = `
            <div id="left">
                <div id="top"><p>the.weather</p> </div>
                <div id="bottom">
                    <p>${data.main.temp}°</p>
                    <p>${data.name}</p>
                    <p id="icon-w">icooon</p>
                </div>
            </div>`
            lower.innerHTML=`
            <div id="lower">
                <h3>Country: ${data.sys.country}</h3>
                <h4 id="desc">${data.weather[0].description}</h4>
                <P>Feels like: ${data.main.feels_like}°C </P>
                <P>Max temp: ${data.main.temp_max}</P>
                <P>Min temp: ${data.main.temp_min}</P>
                <p>Pressure: ${data.main.pressure}</p>
                <p>Humidity: ${data.main.humidity}</p>
                <P>Wincd Speed: ${data.wind.speed}</P>
            </div>`

            // let container = document.getElementById('container');
            const bottom = document.getElementById('bottom')
            const icon = document.getElementById('icon-w')

            if (change === "Thunderstorm") {
                icon.innerHTML = '<i class="ri-thunderstorms-line"></i>';
                container.style.backgroundImage="url('assets/THUNDER.webp')";
            }
            else if (change === "Drizzle") {
                icon.innerHTML = '<i class="ri-drizzle-line"></i>';
                container.style.backgroundImage="url('assets/THUNDER.webp')";
            }
            else if (change === "Rain") {
                icon.innerHTML = '<i class="ri-rainy-line"></i>';
                container.style.backgroundImage="url('assets/rain.avif')";
            }
            else if (change === "Snow") {
                icon.innerHTML = '<i class="ri-snowy-line"></i>';
                container.style.backgroundImage="url('assets/snow.avif')";
            }
            else if (change === "Clear") {
                icon.innerHTML = '<i class="ri-cloud-off-line"></i>';
                container.style.backgroundImage="url('assets/sun.avif')";
            }
            else if (change === "Clouds") {
                icon.innerHTML = '<i class="ri-cloud-line"></i>';
                container.style.backgroundImage="url('assets/cloud1.jpg')";
            }
            else if (change === "mist") {
                icon.innerHTML = '<i class="ri-cloud-line"></i>';
                container.style.backgroundImage="url('assets/msit.avif')";
            }
            else {
                icon.innerHTML = '<i class="ri-cloud-line"></i>';
                container.style.backgroundImage="url('assets/cloud1.jpg')";
            }
        })
})
