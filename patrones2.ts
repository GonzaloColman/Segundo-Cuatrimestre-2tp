class Vehiculo {
    marca: string;
    modelo: string;
    // indicamos marca y modelo
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    //metodo para imprimir marca y modelo
    imprimirDetalles() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}

class Auto extends Vehiculo {
    cantidadAsientos: number;
    //indicamos cantidad de asiento
    constructor(marca: string, modelo: string, cantidadAsientos: number) {
        super(marca, modelo);
        this.cantidadAsientos = cantidadAsientos;
    }

    imprimirDetalles() {
        super.imprimirDetalles();
        console.log(`Cantidad de asientos: ${this.cantidadAsientos}`);
    }
}

class Camioneta extends Vehiculo {
    capacidadCarga: number;
    //indicamos capasidad de carga
    constructor(marca: string, modelo: string, capacidadCarga: number) {
        super(marca, modelo);
        this.capacidadCarga = capacidadCarga;
    }

    imprimirDetalles() {
        super.imprimirDetalles();
        console.log(`Capacidad de carga: ${this.capacidadCarga}`);
    }
}


const auto = new Auto("Ford", "Fiesta", 5);
const camioneta = new Camioneta("Ford", "Ranger", 1000);

auto.imprimirDetalles();
console.log();
camioneta.imprimirDetalles();
