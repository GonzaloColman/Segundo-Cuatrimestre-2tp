// clase cafe
class cafetera {
	//interface
	private capasidadMax: number;
	private capasidadActual: number;
	//constructor para indicar el maximo y la capasidad actual
	constructor(capasidadMax = 1000, capasidadActual = 0) {
		this.capasidadMax = capasidadMax;
		this.capasidadActual = capasidadActual > capasidadMax ? capasidadMax : capasidadActual;
	}
	//indico que se llene hasta capasidad maxima
	llenarCafetera() {
		this.capasidadActual = this.capasidadMax;
		console.log(`se lleno la cafetera ${this.capasidadActual}`)
	}
	// indico cuanto la cantidad que devo serveir
	servirTaza(cantidad: number) {
		if (this.capasidadActual >= cantidad) {
			this.capasidadActual -= cantidad;
			console.log(`Se a servido una taza de ${this.capasidadActual}c.c. de cafe.`);
			this.capasidadActual = 0
		}
	}
	//mestro la cantidad que hay en cafetera
	capasidadActualCafetera() {
		this.capasidadActual;
		console.log(`la cantidad actual es de ${this.capasidadActual}c.c en la cafetera`)
	}
	//vacio la cafetera
	vaciarCafetera() {
		this.capasidadActual = 0;
		console.log(`la cantidad actual es de ${this.capasidadActual}c.c en la cafetera`)
	}
	//agrego cafe a la cafetera y si me paso me lo indica
	agregarCafe(cantidad: number) {
		if (this.capasidadActual + cantidad > this.capasidadMax) {
			console.log(`No se puede agregar ${cantidad} c.c. de cafe porque excede la capacidad maxima.`);
			console.log(`Se ha agregado ${this.capasidadMax - this.capasidadActual} c.c. de cafe.`);
			this.capasidadActual = this.capasidadMax;
		} else {
			console.log(`Se ha agregado ${cantidad} c.c. de cafe.`);
			this.capasidadActual += cantidad;
		}
	}
}
const miCafetera = new cafetera();
miCafetera.llenarCafetera();
miCafetera.servirTaza(150);
miCafetera.capasidadActualCafetera()
miCafetera.agregarCafe(500);
miCafetera.servirTaza(250);
miCafetera.vaciarCafetera();
