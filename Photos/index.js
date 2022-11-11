const API_URL = "http://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

// Funcion que gestiona la peticion web
function onRequestHandler(){
    if (this.readyState === 4 && this.status == 200) {

        const fotos = JSON.parse(this.response);
        console.log(fotos);

        let div = document.getElementById('app');
        div.innerHTML=" ";

        //Insertamos la respuesta en el div
        const HTMLResponse = document.querySelector("#app");
               
        for (let i = 0; i <= 9; i++){
            let divInside = document.createElement('div');
            divInside.innerHTML = "URL: <b>" + fotos[i].url + "<br><a href=" + fotos[i].url + "><img src=" + fotos[i].thumbnailUrl + "></a><br><br>";
            div.appendChild(divInside);
        }  
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open ("GET",`${API_URL}/photos`);
xhr.send();