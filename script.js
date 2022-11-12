const KEY = `8895ba3d8e304a9eb69145906220511`;

let time = new Date;
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dayFirst = days[time.getDay()];
let daySecond = days[time.getDay()+1];
let dayThird = days[time.getDay()+2];
let dayFourth = days[time.getDay()+3];
let dayFifth = days[time.getDay()+4];
let daySixth = days[time.getDay()+5];
let daySeventh = days[time.getDay()+6];

document.getElementById('forecast__day-sunday').innerHTML=dayFirst;
document.getElementById('today__day').innerHTML=dayFirst;
document.getElementById('forecast__day-monday').innerHTML=daySecond;
document.getElementById('forecast__day-tuesday').innerHTML=dayThird;
document.getElementById('forecast__day-wednesday').innerHTML=dayFourth;
document.getElementById('forecast__day-thursday').innerHTML=dayFifth;
document.getElementById('forecast__day-friday').innerHTML=daySixth;
document.getElementById('forecast__day-saturday').innerHTML=daySeventh;

async function getWeather(){
    const API = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=baku&days=7`;

    const res = await fetch(API);
    const data = await res.json();
    console.log (data);

    const todayDate = document.getElementsByClassName("today__date")[0]
    todayDate.innerHTML = data.forecast.forecastday[0].date;

    const todayTime = document.getElementsByClassName("today__time")[0]
    const localTime = data.location.localtime
    todayTime.innerHTML = localTime.slice(10,)
   
    
    const tempCurrent = document.getElementsByClassName("info__temperature-current")[0]
    tempCurrent.innerHTML = data.current.temp_c;
    
    const condition = document.getElementsByClassName("info__condition-current")[0]
    condition.innerHTML = data.current.condition.text;

    const rain = document.getElementsByClassName("info__rain-current")[0]
    rain.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain;

    const humidity = document.getElementsByClassName("info__humidity-current")[0]
    humidity.innerHTML = data.current.humidity;

    const windSpeed = document.getElementsByClassName("info__wind-current")[0]
    windSpeed.innerHTML = data.current.wind_mph;

    const tempSunday = document.getElementsByClassName("forecast__temp-sunday")[0]
    tempSunday.innerHTML = data.forecast.forecastday[0].day.avgtemp_c;

    const tempMonday = document.getElementsByClassName("forecast__temp-monday")[0]
    tempMonday.innerHTML = data.forecast.forecastday[1].day.avgtemp_c;

    const tempTuesday = document.getElementsByClassName("forecast__temp-tuesday")[0]
    tempTuesday.innerHTML = data.forecast.forecastday[2].day.avgtemp_c;

    const tempWednesday = document.getElementsByClassName("forecast__temp-wednesday")[0]
    tempWednesday.innerHTML = data.forecast.forecastday[3].day.avgtemp_c;

    const tempThursday = document.getElementsByClassName("forecast__temp-thursday")[0]
    tempThursday.innerHTML = data.forecast.forecastday[4].day.avgtemp_c;

    const tempFriday = document.getElementsByClassName("forecast__temp-friday")[0]
    tempFriday.innerHTML = data.forecast.forecastday[5].day.avgtemp_c;

    const tempSaturday = document.getElementsByClassName("forecast__temp-saturday")[0]
    tempSaturday.innerHTML = data.forecast.forecastday[6].day.avgtemp_c;

    

    const iconSunday = document.getElementsByClassName("forecast__icon-sunday")[0]
    iconSunday.src = `https:`+data.forecast.forecastday[0].day.condition.icon;

    const iconMonday = document.getElementsByClassName("forecast__icon-monday")[0]
    iconMonday.src = `https:`+data.forecast.forecastday[1].day.condition.icon;
    
    const iconTuesday = document.getElementsByClassName("forecast__icon-tuesday")[0]
    iconTuesday.src = `https:`+data.forecast.forecastday[2].day.condition.icon;

    const iconWednesday = document.getElementsByClassName("forecast__icon-wednesday")[0]
    iconWednesday.src = `https:`+data.forecast.forecastday[3].day.condition.icon;

    const iconThursday = document.getElementsByClassName("forecast__icon-thursday")[0]
    iconThursday.src = `https:`+data.forecast.forecastday[4].day.condition.icon;

    const iconFriday = document.getElementsByClassName("forecast__icon-friday")[0]
    iconFriday.src = `https:`+data.forecast.forecastday[5].day.condition.icon;

    const iconSaturday = document.getElementsByClassName("forecast__icon-saturday")[0]
    iconSaturday.src = `https:`+data.forecast.forecastday[6].day.condition.icon;
   
    

    let eventFirstDay = document.getElementById("forecast__day-sunday")
    eventFirstDay.addEventListener("click",() =>{
        tempCurrent.innerHTML = data.current.temp_c;
        humidity.innerHTML = data.current.humidity;
        windSpeed.innerHTML = data.current.wind_mph;
        rain.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain;
        condition.innerHTML = data.current.condition.text;
        todayDate.innerHTML = data.forecast.forecastday[0].date;
        document.getElementById('today__day').innerHTML = dayFirst;             
    })

    eventFirstDay.addEventListener("mouseover",()=>{
        eventFirstDay.style.color="#ff6d6d"
        eventFirstDay.style.cursor="pointer"
    })
    eventFirstDay.addEventListener("mouseout",()=>{
        eventFirstDay.style.color="black"
    })


    let eventSecondDay = document.getElementById("forecast__day-monday")
    eventSecondDay.addEventListener("click",() =>{
        tempCurrent.innerHTML = data.forecast.forecastday[1].day.avgtemp_c;
        humidity.innerHTML = data.forecast.forecastday[1].day.avghumidity;
        windSpeed.innerHTML = data.forecast.forecastday[1].day.maxwind_kph;
        rain.innerHTML = data.forecast.forecastday[1].day.daily_chance_of_rain;
        condition.innerHTML = data.forecast.forecastday[1].day.condition.text;
        todayDate.innerHTML = data.forecast.forecastday[1].date;
        document.getElementById('today__day').innerHTML = daySecond;        
    })

    eventSecondDay.addEventListener("mouseover",()=>{
        eventSecondDay.style.color="#ff6d6d"
        eventSecondDay.style.cursor="pointer"
    })
    eventSecondDay.addEventListener("mouseout",()=>{
        eventSecondDay.style.color="black";
    })


    let eventThirdDay = document.getElementById("forecast__day-tuesday")
    eventThirdDay.addEventListener("click",() =>{
        tempCurrent.innerHTML = data.forecast.forecastday[2].day.avgtemp_c;
        humidity.innerHTML = data.forecast.forecastday[2].day.avghumidity;
        windSpeed.innerHTML = data.forecast.forecastday[2].day.maxwind_kph;
        rain.innerHTML = data.forecast.forecastday[2].day.daily_chance_of_rain;
        condition.innerHTML = data.forecast.forecastday[2].day.condition.text;
        todayDate.innerHTML = data.forecast.forecastday[2].date;
        document.getElementById('today__day').innerHTML = dayThird;        
    })

    eventThirdDay.addEventListener("mouseover",()=>{
        eventThirdDay.style.color="#ff6d6d"
        eventThirdDay.style.cursor="pointer"
    })
    eventThirdDay.addEventListener("mouseout",()=>{
        eventThirdDay.style.color="black";
    })


    let eventFourthDay = document.getElementById("forecast__day-wednesday")
    eventFourthDay.addEventListener("click",() =>{
        tempCurrent.innerHTML = data.forecast.forecastday[3].day.avgtemp_c;
        humidity.innerHTML = data.forecast.forecastday[3].day.avghumidity;
        windSpeed.innerHTML = data.forecast.forecastday[3].day.maxwind_kph;
        rain.innerHTML = data.forecast.forecastday[3].day.daily_chance_of_rain;
        condition.innerHTML = data.forecast.forecastday[3].day.condition.text;
        todayDate.innerHTML = data.forecast.forecastday[3].date;
        document.getElementById('today__day').innerHTML = dayFourth;   
    })

    eventFourthDay.addEventListener("mouseover",()=>{
        eventFourthDay.style.color="#ff6d6d"
        eventFourthDay.style.cursor="pointer"
    })
    eventFourthDay.addEventListener("mouseout",()=>{
        eventFourthDay.style.color="black";
    })
    
   
    let eventFifthDay = document.getElementById("forecast__day-thursday")
    eventFifthDay.addEventListener("click",() =>{
        tempCurrent.innerHTML = data.forecast.forecastday[4].day.avgtemp_c;
        humidity.innerHTML = data.forecast.forecastday[4].day.avghumidity;
        windSpeed.innerHTML = data.forecast.forecastday[4].day.maxwind_kph;
        rain.innerHTML = data.forecast.forecastday[4].day.daily_chance_of_rain;
        condition.innerHTML = data.forecast.forecastday[4].day.condition.text;
        todayDate.innerHTML = data.forecast.forecastday[4].date;
        document.getElementById('today__day').innerHTML = dayFifth;      
    })

    eventFifthDay.addEventListener("mouseover",()=>{
        eventFifthDay.style.color="#ff6d6d"
        eventFifthDay.style.cursor="pointer"
    })
    eventFifthDay.addEventListener("mouseout",()=>{
        eventFifthDay.style.color="black";
    })


    let eventSixthDay = document.getElementById("forecast__day-friday")
    eventSixthDay.addEventListener("click",() =>{
        tempCurrent.innerHTML = data.forecast.forecastday[5].day.avgtemp_c;
        humidity.innerHTML = data.forecast.forecastday[5].day.avghumidity;
        windSpeed.innerHTML = data.forecast.forecastday[5].day.maxwind_kph;
        rain.innerHTML = data.forecast.forecastday[5].day.daily_chance_of_rain;
        condition.innerHTML = data.forecast.forecastday[5].day.condition.text;
        todayDate.innerHTML = data.forecast.forecastday[5].date;
        document.getElementById('today__day').innerHTML = daySixth;        
    })

    eventSixthDay.addEventListener("mouseover",()=>{
        eventSixthDay.style.color="#ff6d6d"
        eventSixthDay.style.cursor="pointer"
    })
    eventSixthDay.addEventListener("mouseout",()=>{
        eventSixthDay.style.color="black";
    })


    let eventSeventhDay = document.getElementById("forecast__day-saturday")
    eventSeventhDay.addEventListener("click",() =>{
        tempCurrent.innerHTML = data.forecast.forecastday[6].day.avgtemp_c;
        humidity.innerHTML = data.forecast.forecastday[6].day.avghumidity;
        windSpeed.innerHTML = data.forecast.forecastday[6].day.maxwind_kph;
        rain.innerHTML = data.forecast.forecastday[6].day.daily_chance_of_rain;
        condition.innerHTML = data.forecast.forecastday[6].day.condition.text;
        todayDate.innerHTML = data.forecast.forecastday[6].date;
        document.getElementById('today__day').innerHTML = daySeventh;         
    })

    eventSeventhDay.addEventListener("mouseover",()=>{
        eventSeventhDay.style.color="#ff6d6d"
        eventSeventhDay.style.cursor="pointer"
    })
    eventSeventhDay.addEventListener("mouseout",()=>{
        eventSeventhDay.style.color="black";
    })
}

getWeather()
