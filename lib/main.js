//import 'babel-polyfill';
import Calculadora from './utils/calculadora';
import { diag, printCoord, printCoord2, UiComponent, obj, Punto } from './utils/arrows';
import {Animal, Perro, Gato} from './utils/Animal';

let esto = Calculadora.sumar(3,4);
console.log(esto);
console.log(Calculadora.anchoVentana(), "ancho ventana");
console.log(diag(3,6));
console.log(printCoord(3,6));
console.log(printCoord2(3,6));

obj.bar();

//UiComponent();

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(p1);
console.log(p2);

console.log(Punto.distancia(p1, p2));




var p = new Gato('Mitzie');
var c = new Gato('Gatin', 23);
p.hablar();
c.hablar();







