var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Vehiculo.prototype.imprimirDetalles = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
    };
    return Vehiculo;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, cantidadAsientos) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.cantidadAsientos = cantidadAsientos;
        return _this;
    }
    Auto.prototype.imprimirDetalles = function () {
        _super.prototype.imprimirDetalles.call(this);
        console.log("Cantidad de asientos: ".concat(this.cantidadAsientos));
    };
    return Auto;
}(Vehiculo));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, capacidadCarga) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.capacidadCarga = capacidadCarga;
        return _this;
    }
    Camioneta.prototype.imprimirDetalles = function () {
        _super.prototype.imprimirDetalles.call(this);
        console.log("Capacidad de carga: ".concat(this.capacidadCarga));
    };
    return Camioneta;
}(Vehiculo));
var auto = new Auto("Toyota", "Corolla", 5);
var camioneta = new Camioneta("Ford", "Ranger", 1000);
auto.imprimirDetalles();
console.log();
camioneta.imprimirDetalles();
