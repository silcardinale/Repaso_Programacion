export class Punto {
    private x: number;
    private y: number;

    constructor (x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }

    public SetX(newX:number):number{
        return this.x = newX;
    }
    public SetY(newY:number):number{
        return this.y = newY;
    }
    public toString():string{
               
        return "("+ this.x.toString() + ","  + this.y.toString() + ")";

    }
    public distanciaAlOrigen():number{
        let x1 = 0;
        let x2 = this.x;
        let y1 = 0;
        let y2 = this.y;
        let puntos:number;
        let distancia_origen:number;
        
        puntos = Math.pow((x2-x1),2) + Math.pow((y2-y1),2)
        distancia_origen = Math.sqrt(puntos);
        return distancia_origen;
    }
    public dist_origen():number{
        let x = this.x, y =this.y; 
        return Math.sqrt(x * x + y * y);
    }

    public calcular_Dist_P(otroPunto:Punto):number{
        let x1 = this.x - otroPunto.getX();
        let y1 = this.y - otroPunto.getY();
        
        return Math.sqrt(x1 * x1 + y1 * y1);      
    }

    public calcularDistancia(otroPunto:Punto):number{
         let x1 = this.x;
         let x2 = otroPunto.getX();
         let y1 = this.y;
         let y2 = otroPunto.getY();
        
        let result:number;
        let distancia = Math.pow((x2-x1),2) + Math.pow((y2-y1),2);
        result =Math.sqrt(distancia)
        return result;
    }
    public calcularCuadrante():number{
        let cuadrante:number;

        if(this.x == 0 && this.y == 0){
             cuadrante = 0;
        }
        if(this.x > 0 && this.y > 0){
            cuadrante = 1;
        }
        if(this.x < 0 && this.y >0){
            cuadrante = 2;
        }
        if(this.x <0 && this.y <0){
            cuadrante = 3;
        }
        if(this.x >0 && this.y <0){
            cuadrante = 4;
        }
        return cuadrante;
        
    }

    public calcularMasCercano(puntos:Punto[]):Punto{
      let puntoMasCercano = null;
      if (puntos != null && puntos.length > 0) {
      let distanciaMinima = this.calcular_Dist_P(puntos[0]);
      let puntoMasCercano = puntos[0];

      for (let i = 1; i < puntos.length; i++) {
        let distancia = this.calcular_Dist_P(puntos[i]);
        if (distancia < distanciaMinima) {
          distancia = distanciaMinima;
          puntoMasCercano = puntos[i];
        }
      }
    }
    
    return puntoMasCercano;
  }
  
    
}

export class Triangulo{

    public vertice1: Punto;
    public vertice2: Punto;
    public vertice3: Punto;

    constructor(vertice1:Punto,vertice2:Punto,vertice3:Punto){
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    public calcularLongitudLados() : number[]{
        let longitudLados = new Array();

    // longitud 1->2
    longitudLados[0] = this.vertice1.calcular_Dist_P(this.vertice2);
    // longitud 2->3
    longitudLados[1] = this.vertice2.calcular_Dist_P(this.vertice3);
    // longitud 3->1
    longitudLados[2] = this.vertice3.calcular_Dist_P(this.vertice1);

    return longitudLados;
       
    }
}