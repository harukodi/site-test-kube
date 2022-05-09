//varibles for ids in HTML
const stockholmBtn = document.getElementById("Stockholm")
const beijngBtn = document.getElementById("Beijing")
const berlinBtn = document.getElementById("Berlin")
const osloBtn = document.getElementById("Oslo")
const paraGraph = document.getElementById("para")
const forcastDiv = document.getElementById("forcast-weather")
const form = document.getElementById("input-form")
const searchBox = document.getElementById("search-country")
const buttonSearch = document.getElementById("search-btn")
const imgTag = document.getElementById("img-tag")


//API fetch to openAPI for weather
//fetch for swedens temp
async function getResponseSwe() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const dataTemp = data.main.temp
    const kelvinToCelsius = Math.round(dataTemp - 273.15)
    //for test const outPutCelsius = `Stockholm ${kelvinToCelsius}°C`
    return kelvinToCelsius
    }catch(err){console.log(err)}
}
//weather icon fetch Osl
async function getIconSwe() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const imgSource = data.weather[0].icon
    const imgUrl = `https://openweathermap.org/img/wn/${imgSource}@2x.png`
    return imgUrl
    }catch(err){console.log(err)}
}

//fetch for beijings temp
async function getResponseBei() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.9042&lon=116.4074&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const dataTemp = data.main.temp
    const kelvinToCelsius = Math.round(dataTemp - 273.15)
    //for test const outPutCelsius = `Stockholm ${kelvinToCelsius}°C`
    return kelvinToCelsius
    }catch(err){console.log(err)}
}
//weather icon fetch bei
async function getIconBei() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.9042&lon=116.4074&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const imgSource = data.weather[0].icon
    const imgUrl = `https://openweathermap.org/img/wn/${imgSource}@2x.png`
    return imgUrl
    }catch(err){console.log(err)}
}

//fetch for berlins temp
async function getResponseBer() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const dataTemp = data.main.temp
    const kelvinToCelsius = Math.round(dataTemp - 273.15)
    //for test const outPutCelsius = `Stockholm ${kelvinToCelsius}°C`
    return kelvinToCelsius
    }catch(err){console.log(err)}
}
//weather icon fetch ber
async function getIconBer() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const imgSource = data.weather[0].icon
    const imgUrl = `https://openweathermap.org/img/wn/${imgSource}@2x.png`
    return imgUrl
    }catch(err){console.log(err)}
}

//fetch for Oslos temp
async function getResponseOsl() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.9139&lon=10.7522&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const dataTemp = data.main.temp
    const kelvinToCelsius = Math.round(dataTemp - 273.15)
    //for test const outPutCelsius = `Stockholm ${kelvinToCelsius}°C`
    return kelvinToCelsius
    }catch(err){console.log(err)}
}
//weather icon fetch Osl
async function getIconOsl() {
    try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.9139&lon=10.7522&appid=3ffed0093bad41b735b11a179fc02fb5")
    const data = await res.json()
    const imgSource = data.weather[0].icon
    const imgUrl = `https://openweathermap.org/img/wn/${imgSource}@2x.png`
    return imgUrl
    }catch(err){console.log(err)}
}

//fetch for searchQuery
async function searchFetch(queryInput) {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${queryInput}&appid=3ffed0093bad41b735b11a179fc02fb5`)
        const data = await res.json()
        const dataTemp = data.main.temp
        const queryCountry = data.name
        const kelvinToCelsius = Math.round(dataTemp - 273.15)
        const imgSource = data.weather[0].icon
        const imgUrl = `https://openweathermap.org/img/wn/${imgSource}@2x.png`
        renderTemp(kelvinToCelsius, queryCountry, imgUrl)
    }catch(err){console.log(err)}
}

//evenListener for swedens temp
stockholmBtn.addEventListener('click', e => {
    (async () => {
        const tempSwe = await getResponseSwe()
        const iconSwe = await getIconSwe()
        renderTemp(tempSwe,"Stockholm", iconSwe)
    })()
})

//evenListener for beijing temp
beijngBtn.addEventListener('click', e => {
    (async () => {
        const tempBei = await getResponseBei()
        const iconBei = await getIconBei()
        renderTemp(tempBei,"Beijing", iconBei)
    })()
})

//evenListener for berlin temp
berlinBtn.addEventListener('click', e => {
    (async () => {
        const tempBer = await getResponseBer()
        const iconBer = await getIconBer()
        renderTemp(tempBer,"Berlin", iconBer)
    })()
})

//evenListener for oslo temp
osloBtn.addEventListener('click', e => {
    (async () => {
        const tempOsl = await getResponseOsl()
        const iconOsl = await getIconOsl()
        renderTemp(tempOsl,"Oslo", iconOsl)
    })()
})

//eventListner for search
form.addEventListener('submit', async e =>{
    e.preventDefault()
    const inputQuerySearch = searchBox.value
    searchFetch(inputQuerySearch)
    searchBox.value = ""
})

//render function
const renderTemp = function(inputTemp, nameOfCity, imgsrc){
    const tempAnswer = inputTemp
    paraGraph.innerHTML = `${nameOfCity} ${tempAnswer}°C`
    imgTag.src = imgsrc
}

//ipLocationWeather
async function callWeatherApi(cityName, country) {
    res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=3ffed0093bad41b735b11a179fc02fb5`)
    data = await res.json()
    cityTemp = data.main.temp
    const kelvinToCelsius = Math.round(cityTemp - 273.15)
    const imgSource = data.weather[0].icon
    const imgUrl = `https://openweathermap.org/img/wn/${imgSource}@2x.png`
    renderTemp(kelvinToCelsius, cityName, imgUrl)
}

async function ipCall() {
    try{
        res = await fetch("https://eu-api.ipdata.co/?api-key=4ac73d343d5f4db795120631c9767ce2d3c138352973306d226780f7")
        data = await res.json()
        countryCode = data.country_code
        city = data.city
        callWeatherApi(city, countryCode)
    }catch(err){paraGraph.innerHTML = "no internet detected"
    console.log(err)}
}

ipCall()