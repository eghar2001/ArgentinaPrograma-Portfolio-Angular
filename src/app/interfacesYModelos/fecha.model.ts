import { ThisReceiver } from "@angular/compiler";

export class Fecha{
    private mes:number;
    private anio:number;
    private dia:number;
    constructor(dia:number,mes:number,anio:number){  
        this.dia = dia
        this.mes = mes;
        this.anio = anio;
       
    }
    static FechaActual:Fecha = new Fecha((new Date).getDate(),(new Date).getMonth()+1,(new Date).getFullYear())
    public getDia(){
        return this.dia;
    }
    public getMes(){
        return this.mes;
    }
    public getAnio(){
        return this.anio;
    }
    public getMesString(){
        let mesString:string;
        switch (this.mes){
            case 1:{
                mesString="Enero"
                break;
            }
            case 2:{
                mesString="Febrero"
                break;
            }
            case 3:{
                mesString="Marzo"
                break;
            }
            case 4:{
                mesString="Abril"
                break;
            }  
            case 5:{
                mesString="Mayo"
                break;
            }        
            case 6:{
                mesString="Junio";
                break;
            }
            case 7:{
                mesString="Julio";
                break;
            }
            case 8:{
                mesString="Agosto";
                break;
            }
            case 9:{
                mesString="Septiembre";
                break;
            }
            case 10:{
                mesString="Octubre";
                break;
            }
            case 11:{
                mesString="Noviembre";
                break;
            }
            case 12:{
                mesString="Diciembre";
                break;
            }
            default:{
                mesString="";
                break;
            }
        }
        return mesString;
     }
     public getFullDateString():string{
         if (this.dia == 0){
            return this.anio===0?"actualidad":this.mes===0?`${this.anio}`:`${this.getMesString()} del ${this.anio}`;
         }
         else{
             return this.dia + " de " + this.getMesString() + " del " +  this.anio;
         }       
        
    }
    public fechaNacimientoValida():boolean{
        //Se hizo teniendo en consideracion que el OR es una fecha de cumpleaños
        if(Fecha.FechaActual.getAnio()>this.anio){
            return true;
        }
        else if (Fecha.FechaActual.getAnio()<this.anio){
            return false;
        }
        else{
            if (Fecha.FechaActual.getMes()>this.mes){
                return true;
            }
            else if(Fecha.FechaActual.getMes()<this.mes){
                return false;
            }
            else{
                return Fecha.FechaActual.getDia()>=this.dia
            }
        }
    }
    public calculaEdad():number{
        if (this.fechaNacimientoValida()){
            if(Fecha.FechaActual.getMes()<this.mes || (Fecha.FechaActual.getMes()===this.mes && Fecha.FechaActual.getDia()<this.dia ) ){
                return Fecha.FechaActual.anio - this.anio - 1;
            }
            else{
                return Fecha.FechaActual.anio - this.anio; 
            }
        }
        else{
            return -1;
        }
    }

}