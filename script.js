let input= document.querySelector(".input");
let btn= document.querySelector(".btn");
let abcd= document.querySelector(".abc");
btn.addEventListener("click",onchange);

function onchange(){   
abcd.innerText=input.value;
input.value="";
checkweather(abcd.innerText);
}

let apikey="9997dac2d837752f990c600fb9568687";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city){
    let response=await fetch(apiUrl+city+`&appid=${apikey}`);
    let file= await response.json();
    
    document.querySelector(".discribation").innerText=file.weather[0].description;
    document.querySelector(".hightemp").innerText=file.main.temp_max+"c";
    document.querySelector(".lowtemp").innerText=file.main.temp_min+"c";
    document.querySelector(".humidity").innerText=file.main.humidity+"%";
    document.querySelector(".sunrise").innerText=file.sys.sunrise;
    document.querySelector(".sunset").innerText=file.sys.sunset;
}
