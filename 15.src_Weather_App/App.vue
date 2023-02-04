<template>
    <div
        id="weather-app"
        :class="
            typeof weather.main != 'undefined' && weather.main.temp > 16
                ? 'warm'
                : ''
        "
    >
        <main>
            <div class="search-box">
                <input
                    type="text"
                    class="search-bar"
                    placeholder="Search...."
                    v-model="query"
                    @keyup.enter="fetchWeather"
                />
            </div>
            <div class="weather-wrap">
                <div class="location-box">
                    <div class="location">
                        {{ weather.name }}, {{ weather.sys.country }}
                    </div>
                    <div class="date">{{ dateBuilder() }}</div>
                </div>
            </div>
            <div class="weather-box">
                <!--alt + 0176，可打出溫度符號-->
                <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
                <div class="weather">{{ weather.weather[0].main }}</div>
            </div>
        </main>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        let query = ref("");
        let weather = {
            coord: {
                lon: 10.99,
                lat: 44.34,
            },
            weather: [
                {
                    id: 501,
                    main: "clouds",
                    description: "Broken clouds",
                    icon: "10d",
                },
            ],
            base: "stations",
            main: {
                temp: 18.28,
                feels_like: 18,
                temp_min: 297.56,
                temp_max: 300.05,
                pressure: 1007,
                humidity: 86,
                sea_level: 1015,
                grnd_level: 933,
            },
            visibility: 10000,
            wind: {
                speed: 6.17,
                deg: 30,
                gust: 1.18,
            },
            rain: {
                "1h": 3.16,
            },
            clouds: {
                all: 75,
            },
            dt: 1661870592,
            sys: {
                type: 2,
                id: 2075663,
                country: "Taiwan",
                sunrise: 1661834187,
                sunset: 1661882248,
            },
            timezone: 7200,
            id: 3163858,
            name: "Taoyuan",
            cod: 200,
        };
        function fetchWeather() {
            //fetch weather from web api
            //set weather and change {{ parameter}}
            console.log("fetchWeather");
        }
        function dateBuilder() {
            //格式: Monday 20 January 2023
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            let d = new Date();
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
        }
        return { query, fetchWeather, weather, dateBuilder };
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: "montserrat", sans-serif;
}
#weather-app {
    background-image: url("./assets/cold-bg.jpg");
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
}
#weather-app.warm {
    background-image: url("./assets/warm-bg.jpg");
}
main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0.75)
    );
}
.search-box {
    width: 100%;
    margin-bottom: 30px;
}
.search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;

    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
}
.search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
}
.location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
}
.weather-box {
    text-align: center;
}
.weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
