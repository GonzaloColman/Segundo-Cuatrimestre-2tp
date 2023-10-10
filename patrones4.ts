class Cliente {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    calcular_descuento(precio: number): number {
        if (this.tipo === "regular") {
            return 0;
        } else if (this.tipo === "gold" && precio > 10000) {
            return precio * 0.2;
        } else if (this.tipo === "platinum") {
            return precio * 0.2;
        } else {
            return 0;
        }
    }
}

// tipo de descuento
const cliente_regular = new Cliente("regular");
const cliente_gold = new Cliente("gold");
const cliente_platinum = new Cliente("platinum");
//lista de productos
const productos = [
    { nombre: "Leche", precio: 500 },
    { nombre: "Pan", precio: 700 },
    { nombre: "Arroz", precio: 400 },
    { nombre: "Azúcar", precio: 800 },
    { nombre: "Aceite", precio: 1000 },
    { nombre: "Carne", precio: 3000 },
    { nombre: "Pollo", precio: 2500 },
    { nombre: "Papas", precio: 200 },
    { nombre: "Tomates", precio: 600 },
    { nombre: "Cebollas", precio: 450 }
];

for (const producto of productos) {
    const descuento_regular = cliente_regular.calcular_descuento(producto.precio);
    const descuento_gold = cliente_gold.calcular_descuento(producto.precio);
    const descuento_platinum = cliente_platinum.calcular_descuento(producto.precio);

    console.log(`Producto: ${producto.nombre}`);
    console.log(`Descuento para cliente regular: ${descuento_regular}`);
    console.log(`Descuento para cliente gold: ${descuento_gold}`);
    console.log(`Descuento para cliente platinum: ${descuento_platinum}`);
    console.log();
}
