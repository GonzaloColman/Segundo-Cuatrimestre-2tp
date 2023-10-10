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
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    Animal.prototype.hacer_sonido = function () {
        console.log('El animal hace un sonido.');
    };
    Animal.prototype.moverse = function () {
        console.log('El animal se mueve.');
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza, tamaño) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tamaño = tamaño;
        return _this;
    }
    Perro.prototype.buscar_objeto = function () {
        console.log("El perro ".concat(this.nombre, " est\u00E1 buscando un objeto."));
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, raza, pelaje) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.pelaje = pelaje;
        return _this;
    }
    Gato.prototype.jugar_con_juguete = function () {
        console.log("El gato ".concat(this.nombre, " est\u00E1 jugando con un juguete."));
    };
    return Gato;
}(Animal));
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipo_de_pico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tipo_de_pico = tipo_de_pico;
        return _this;
    }
    Pajaro.prototype.volar = function () {
        console.log("El p\u00E1jaro ".concat(this.nombre, " est\u00E1 volando."));
    };
    return Pajaro;
}(Animal));
var miPerro = new Perro('juan', 4, 'Gran Danes', 'Grande');
miPerro.hacer_sonido();
miPerro.moverse();
miPerro.buscar_objeto();
var miGato = new Gato('Fideo', 12, 'Esfinge', 'Mediano');
miGato.hacer_sonido();
miGato.moverse();
miGato.jugar_con_juguete();
var miPajaro = new Pajaro('omar', 6, 'buho', 'Chico');
miPajaro.hacer_sonido();
miPajaro.moverse();
miPajaro.volar();
