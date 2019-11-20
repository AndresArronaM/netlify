import data from './data.js';
//let menu = '{"menu":[{"Name":"Documentacion","Carpeta":"Doc","Archivo":"Documentation.html"},{"Name":"Colores","Carpeta":"Colors","Archivo":"Colors.html"},{"Name":"CLI","Carpeta":"Cli","Archivo":"Cli.html"},{"Name":"Cambios","Carpeta":"Changelog","Archivo":"Changelog.html"},{"Name":"UX","Carpeta":"UX","Archivo":"Style_Guide.html"},{"Name":"Blog","Carpeta":"Blog","Archivo":"Blog.html"}]}'
//console.log(data);

let menu = '{"Index":[{"Name":"Documentacion"}], "Colores":[{"Name":"Colores"}]}';

let JSONtoData = JSON.parse(menu)
let datos = JSON.stringify(JSONtoData);
document.getElementById('Menu').innerHTML = JSONtoData.Colores[0].Name;
console.log(datos);

/*let async = new XMLHttpRequest();

async.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let i, j;
        var mostrarData = "";

        for(i in data.menu){
            mostrarData += "<li><a href"+'"'+data.menu[i].Carpeta+"\//"+data.menu[i].Archivo+'"'+">";
            mostrarData += data.menu[i].Name +"</a></li>";
        }
    }

    document.getElementById("Menu").innerHTML = mostrarData;
}

async.open("GET", "./menu.json", true);
async.send();*/