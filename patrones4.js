var Cliente = /** @class */ (function () {
    function Cliente(tipo) {
        this.tipo = tipo;
    }
    Cliente.prototype.calcular_descuento = function (precio) {
        if (this.tipo === "regular") {
            return 0;
        }
        else if (this.tipo === "gold" && precio > 10000) {
            return precio * 0.2;
        }
        else if (this.tipo === "platinum") {
            return precio * 0.2;
        }
        else {
            return 0;
        }
    };
    return Cliente;
}());
// Ejemplo de uso
var cliente_regular = new Cliente("regular");
var cliente_gold = new Cliente("gold");
var cliente_platinum = new Cliente("platinum");
var productos = [
    { nombre: "Leche", precio: 50 },
    { nombre: "Pan", precio: 30 },
    { nombre: "Arroz", precio: 80 },
    { nombre: "Azúcar", precio: 40 },
    { nombre: "Aceite", precio: 100 },
    { nombre: "Carne", precio: 200 },
    { nombre: "Pollo", precio: 150 },
    { nombre: "Papas", precio: 60 },
    { nombre: "Tomates", precio: 70 },
    { nombre: "Cebollas", precio: 50 }
];
for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
    var producto = productos_1[_i];
    var descuento_regular = cliente_regular.calcular_descuento(producto.precio);
    var descuento_gold = cliente_gold.calcular_descuento(producto.precio);
    var descuento_platinum = cliente_platinum.calcular_descuento(producto.precio);
    console.log("Producto: ".concat(producto.nombre));
    console.log("Descuento para cliente regular: ".concat(descuento_regular));
    console.log("Descuento para cliente gold: ".concat(descuento_gold));
    console.log("Descuento para cliente platinum: ".concat(descuento_platinum));
    console.log();
}
