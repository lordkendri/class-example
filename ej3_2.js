class App {
    constructor(descargas, puntuacion, peso){
        this. descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("La app esta encendida");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("La app esta apagada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }else {
            alert("A ocurrido un error instalando la app");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App instalada correctamente");
        }
    }
    appInfo(){
        return` 
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso <b>${this.peso}</b><br>
        `
    }
}

app1 = new App("16,000","5 estrellas", "900mb");
app2 = new App("1,000,000","5 estrellas", "800mb");
app3 = new App("6,000","3 estrellas", "100mb");
app4 = new App("1,000","2 estrellas", "150mb");
app5 = new App("500,000","5 estrellas", "500mb");
app6 = new App("7,000","1 estrellas", "800mb");
app7 = new App("300,000","5 estrellas", "900mb");

/*app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();*/

document.write(`
${app1.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`);
