class Animal {
	nombre: string;
	edad: number;
	raza: string;
	//indicamos nombre edad y raza
	constructor(nombre: string, edad: number, raza: string) {
		this.nombre = nombre;
		this.edad = edad;
		this.raza = raza;
	}
	//metodos sonido moverce e info animal
	hacer_sonido() {
		console.log(`El animal ${this.nombre} hace un sonido.`);
	}

	moverse() {
		console.log(`El animal ${this.nombre} se mueve.`);
	}
	infoAnimal() {
		console.log(`Se llama ${this.nombre}, tiene ${this.edad} de edad, es de raza ${this.raza}`);
	}
}
//clase perro para darle la habilidad especial buscar
class Perro extends Animal {
	tamaño: string;

	constructor(nombre: string, edad: number, raza: string, tamaño: string) {
		//le agregamos nombre edad y raza
		super(nombre, edad, raza);
		this.tamaño = tamaño;
	}
	//metodo buscar
	buscar_objeto() {
		console.log(`El perro ${this.nombre} está buscando un objeto.`);
	}
	infoAnimal() {
		super.infoAnimal();
		console.log(`Es de tamaño ${this.tamaño}`);
	}
}
// clase gto para darle la habilidad especial jugar
class Gato extends Animal {
	pelaje: string;

	constructor(nombre: string, edad: number, raza: string, pelaje: string) {
		//le agregamos nombre edad y raza
		super(nombre, edad, raza);
		this.pelaje = pelaje;
	}
	//metodo jugar
	jugar_con_juguete() {
		console.log(`El gato ${this.nombre} está jugando con un juguete.`);
	}
	infoAnimal() {
		super.infoAnimal();
		console.log(`Tiene pelaje ${this.pelaje}`);
	}
}

class Pajaro extends Animal {
	tipo_de_pico: string;

	constructor(nombre: string, edad: number, raza: string, tipo_de_pico: string) {
		//le agregamos nombre edad y raza
		super(nombre, edad, raza);
		this.tipo_de_pico = tipo_de_pico;
	}
	//metodo volar
	volar() {
		console.log(`El pajaro ${this.nombre} está volando.`);
	}
	infoAnimal() {
		super.infoAnimal();
		console.log(`Tiene un pico de tipo ${this.tipo_de_pico}`);
	}
}
//ejemplo de perro
const miPerro = new Perro('juan', 4, 'Gran Danes', 'Grande');
miPerro.infoAnimal();
miPerro.hacer_sonido();
miPerro.moverse();
miPerro.buscar_objeto();
// ejemplo del gato
const miGato = new Gato('Fideo', 12, 'Esfinge', 'pelado');
miGato.infoAnimal();
miGato.hacer_sonido();
miGato.moverse();
miGato.jugar_con_juguete();
//ejemplo del pajaro
const miPajaro = new Pajaro('omar', 6, 'buho', 'Chico');
miPajaro.infoAnimal();
miPajaro.hacer_sonido();
miPajaro.moverse();
miPajaro.volar();
