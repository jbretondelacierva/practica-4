let API_KEY="7f1ac9e2a6deeea5fbf2dbb18d570a7e"; //47b73294df5f543b8ab9365cc2e18fe7
var elementos = document.getElementById("name");

let Ciudad = elementos.value;
let url = "http://api.openweathermap.org/data/2.5/weather?q="+Ciudad+"&APPID="+API_KEY+"&units=metric";


async function getApi(){
    let Ciudad = elementos.value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+Ciudad+"&APPID="+API_KEY+"&units=metric";
    let respuesta = await fetch(url);
    if(respuesta.ok){
        console.log(respuesta);
        let datos = await respuesta.json();
        console.log(datos);
        let informacion = "Temperaturas: " + datos.main.temp + "<br/> Descripcion:"+ datos.weather[0].main;
        document.getElementById("hola").innerHTML = informacion
    }
}


document.getElementById("Buscar").addEventListener("click", myFunction);
function myFunction() {
    event.preventDefault();
    getApi();
    console.log(elementos.value);
    elementos = document.getElementById("name");


}



