"use strict";
exports.__esModule = true;
exports.Triangulo = exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.SetX = function (newX) {
        return this.x = newX;
    };
    Punto.prototype.SetY = function (newY) {
        return this.y = newY;
    };
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var x1 = 0;
        var x2 = this.x;
        var y1 = 0;
        var y2 = this.y;
        var puntos;
        var distancia_origen;
        puntos = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
        distancia_origen = Math.sqrt(puntos);
        return distancia_origen;
    };
    Punto.prototype.dist_origen = function () {
        var x = this.x, y = this.y;
        return Math.sqrt(x * x + y * y);
    };
    Punto.prototype.calcular_Dist_P = function (otroPunto) {
        var x1 = this.x - otroPunto.getX();
        var y1 = this.y - otroPunto.getY();
        return Math.sqrt(x1 * x1 + y1 * y1);
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var x1 = this.x;
        var x2 = otroPunto.getX();
        var y1 = this.y;
        var y2 = otroPunto.getY();
        var result;
        var distancia = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
        result = Math.sqrt(distancia);
        return result;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante;
        if (this.x == 0 && this.y == 0) {
            cuadrante = 0;
        }
        if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var puntoMasCercano = null;
        if (puntos != null && puntos.length > 0) {
            var distanciaMinima = this.calcular_Dist_P(puntos[0]);
            var puntoMasCercano_1 = puntos[0];
            for (var i = 1; i < puntos.length; i++) {
                var distancia = this.calcular_Dist_P(puntos[i]);
                if (distancia < distanciaMinima) {
                    distancia = distanciaMinima;
                    puntoMasCercano_1 = puntos[i];
                }
            }
        }
        return puntoMasCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudLados = new Array();
        // longitud 1->2
        longitudLados[0] = this.vertice1.calcular_Dist_P(this.vertice2);
        // longitud 2->3
        longitudLados[1] = this.vertice2.calcular_Dist_P(this.vertice3);
        // longitud 3->1
        longitudLados[2] = this.vertice3.calcular_Dist_P(this.vertice1);
        return longitudLados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
