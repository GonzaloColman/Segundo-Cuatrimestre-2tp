// clase cafe
var cafetera = /** @class */ (function () {
	//constructor para indicar el maximo y la capasidad actual
	function cafetera(capasidadMax, capasidadActual) {
		if (capasidadMax === void 0) { capasidadMax = 1000; }
		if (capasidadActual === void 0) { capasidadActual = 0; }
		this.capasidadMax = capasidadMax;
		this.capasidadActual = capasidadActual > capasidadMax ? capasidadMax : capasidadActual;
	}
	//indico que se llene hasta capasidad maxima
	cafetera.prototype.llenarCafetera = function () {
		this.capasidadActual = this.capasidadMax;
		console.log("se lleno la cafetera ".concat(this.capasidadActual));
	};
	// indico cuanto la cantidad que devo serveir
	cafetera.prototype.servirTaza = function (cantidad) {
		if (this.capasidadActual >= cantidad) {
			this.capasidadActual -= cantidad;
			console.log("Se a servido una taza de ".concat(this.capasidadActual, "c.c. de cafe."));
			this.capasidadActual = 0;
		}
	};
	//mestro la cantidad que hay en cafetera
	cafetera.prototype.capasidadActualCafetera = function () {
		this.capasidadActual;
	};
	//vacio la cafetera
	cafetera.prototype.vaciarCafetera = function () {
		this.capasidadActual = 0;
	};
	//agrego cafe a la cafetera y si me paso me lo indica
	cafetera.prototype.agregarCafe = function (cantidad) {
		if (this.capasidadActual + cantidad > this.capasidadMax) {
			console.log("No se puede agregar ".concat(cantidad, " c.c. de cafe porque excede la capacidad maxima."));
			console.log("Se ha agregado ".concat(this.capasidadMax - this.capasidadActual, " c.c. de cafe."));
			this.capasidadActual = this.capasidadMax;
		}
		else {
			console.log("Se ha agregado ".concat(cantidad, " c.c. de cafe."));
			this.capasidadActual += cantidad;
		}
	};
	return cafetera;
}());
var miCafetera = new cafetera();
miCafetera.llenarCafetera();
miCafetera.servirTaza(150);
miCafetera.capasidadActualCafetera();
miCafetera.agregarCafe(500);
miCafetera.servirTaza(250);
miCafetera.vaciarCafetera(); 
