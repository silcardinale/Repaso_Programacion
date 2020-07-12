import {Punto} from "./punto";
import {Triangulo} from "./punto";

let coordenadas = new Punto(7,5);
let coordenadas2 = new Punto(4,1);
let coordenadas3 = new Punto(2,1);

let arr_coor = [coordenadas,coordenadas2,coordenadas3];


console.log(coordenadas.getX());
console.log(coordenadas.getY());
console.log(coordenadas.toString());

console.log(coordenadas.distanciaAlOrigen());
console.log(coordenadas.calcularDistancia(coordenadas2));
console.log(coordenadas.calcularDistancia(new Punto(4,1)));
console.log("Los puntos se encuentran en el Cuadrante: ");
console.log(coordenadas.calcularCuadrante());

console.log("Probando Distancia al Origen");
console.log(coordenadas.dist_origen());
console.log(coordenadas.calcular_Dist_P(new Punto(4,1)));

console.log(coordenadas.calcularMasCercano(arr_coor));

let v1 = new Punto(10,6);
let v2 = new Punto(4,8);
let v3 = new Punto(3,5);

let triangule = new Triangulo(v1,v2,v3);

console.log(triangule.calcularLongitudLados());



