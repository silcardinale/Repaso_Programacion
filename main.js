"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var punto_2 = require("./punto");
var coordenadas = new punto_1.Punto(7, 5);
var coordenadas2 = new punto_1.Punto(4, 1);
var coordenadas3 = new punto_1.Punto(2, 1);
var arr_coor = [coordenadas, coordenadas2, coordenadas3];
console.log(coordenadas.getX());
console.log(coordenadas.getY());
console.log(coordenadas.toString());
console.log(coordenadas.distanciaAlOrigen());
console.log(coordenadas.calcularDistancia(coordenadas2));
console.log(coordenadas.calcularDistancia(new punto_1.Punto(4, 1)));
console.log("Los puntos se encuentran en el Cuadrante: ");
console.log(coordenadas.calcularCuadrante());
console.log("Probando Distancia al Origen");
console.log(coordenadas.dist_origen());
console.log(coordenadas.calcular_Dist_P(new punto_1.Punto(4, 1)));
console.log(coordenadas.calcularMasCercano(arr_coor));
var v1 = new punto_1.Punto(10, 6);
var v2 = new punto_1.Punto(4, 8);
var v3 = new punto_1.Punto(3, 5);
var triangule = new punto_2.Triangulo(v1, v2, v3);
console.log(triangule.calcularLongitudLados());