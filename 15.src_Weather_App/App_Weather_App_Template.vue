<template>
    <main>
        <div class="search-box">
            <input type="text" class="search-bar" placeholder="Search...." />
        </div>
        <div class="weather-wrap">
            <div class="location-box">
                <div class="location">Northampton, UK</div>
                <div class="date">Monday 20 January 2023</div>
            </div>
        </div>
        <div class="weather-box">
            <!--alt + 0176，可打出溫度符號-->
            <div class="temp">32°c</div>
            <div class="weather">Sun</div>
        </div>
    </main>
</template>

<script>
export default {
    setup() {
        return {};
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
#app {
    background-image: url("./assets/cold-bg.jpg");
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
}
#app.warm {
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
