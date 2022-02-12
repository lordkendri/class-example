class celular {
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this. rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    encencer(){
        if (this.encendido == false){
            alert("Encender dispositivo");
            this.encendido = true;
        } else {
            alert ("Apagando el dispositivo")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciar dispositivo");
        } else {
            alert("El dispositivo esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.rdp}`);
    }
    grabarVideo(){
        alert(`Grabando video en: ${this.rdc}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        Resolucion de Pantalla: <b>${this.rdp}</b> </br>
        Resolucion de video: <b>${this.rdc}</b> </br>
        Memoria Ram: <b>${this.ram}</b> </br>
        `;
    }
}

class celularAltaGama extends celular{
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc, ram);
        this.rdce = rdce;
    }
    grabarVideoLento(){
        alert("Grabando video en camara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
    mostrarInfoAltaGama(){
        return this.mostrarInfo() + `
        Resolucion de camara trasera: <b>${this.rdce}</b> </br>
        `;
    }
}

celular1 = new celular("Rojo","150g","5'","Full HD", "2GB");
celular2 = new celular("Negro","155g","5.4'","HD", "1GB");
celular3 = new celular("Azul","146g","5.9'","Full HD", "4GB");

celular4 = new celularAltaGama("Rojo", "130g", "5.2", "4K", "16GB", "Full HD");
celular5 = new celularAltaGama("Negro", "135g", "5.5", "4K", "8GB", "HD");

/*celular1.encencer();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.encencer();*/

document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()} <br>

    ${celular4.mostrarInfoAltaGama()} <br>
    ${celular5.mostrarInfoAltaGama()} <br>
`);
