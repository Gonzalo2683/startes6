export class Animal {
    constructor(nombre, edad="No tiene referencia") {
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar() {
        console.log(this.nombre + ' hace un ruido.');
    }
}

export class Perro extends Animal {
    hablar() {
        console.log(this.nombre + ' ladra.');
    }
}

export class Gato extends Animal {

    hablar(){
        console.log(`${this.nombre} maulla muchoo. y su edad es ${this.edad}`);
    }
}