import { getTranslationDeclStmts } from "@angular/compiler/src/render3/view/template";



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
    static cantidadDias(mes:number):number{
        const dias30:number[] = [4,6,9,11];
        const dias31:number[] = [1,3,5,7,8,10,12]
        if (dias30.includes(mes)){
            return 30;
        }
        else if (mes ===2){
            return 28;
        }
        else if(dias31.includes(mes)){
            return 31;
        }
        else{
            return 0;
        }
    }
     //Retorna booleano diciendo si el mes ingresado es valido
    static mesValido(mes:number,anio:number):boolean{
       
        if (anio<Fecha.FechaActual.getAnio()){
            return true;
        }
        else if(anio>Fecha.FechaActual.getAnio()){
            return false;
        }
        else{
            return mes<= Fecha.FechaActual.getMes()
        }
    }
    static diaValido(dia:number,mes:number,anio:number):boolean{
        if (anio<Fecha.FechaActual.getAnio()){
            return true;
        }
        else if(anio>Fecha.FechaActual.getAnio()){
            return false;
        }
        else{
            if(mes < Fecha.FechaActual.getMes()){
                return true;
            }
            else if(mes > Fecha.FechaActual.getMes()){
                return false;
            }
            else{
                return dia <= Fecha.FechaActual.getMes()
            }
        }
    }
    static tiempoTrabajado(fechaInicio:Fecha,fechaFin:Fecha):string{
         function calculaMeses(mesInicio:number,mesFin:number):number{
            let resultado:number = 0;
            let mesActual = mesInicio;
            while(mesActual!==mesFin){
                mesActual = mesActual===12 ? 1:mesActual+1;                
                resultado++;
                console.log(mesActual);
            }
            return resultado;
        }        
        let aniosTrabajados:number ;
        let mesesTrabajados:number ;
        if (fechaFin.getAnio()===0 && fechaFin.getMes()===0){
            if (fechaInicio.getMes()===0){
                aniosTrabajados = Fecha.FechaActual.getAnio()-fechaInicio.anio;
                mesesTrabajados= 0;
            }
            else{
                if(fechaInicio.getMes()<=this.FechaActual.getMes()){
                    aniosTrabajados = Fecha.FechaActual.getAnio()-fechaInicio.anio;
                }
                else{
                    aniosTrabajados = Fecha.FechaActual.getAnio()-fechaInicio.anio-1;
                }
                mesesTrabajados=calculaMeses(fechaInicio.mes,Fecha.FechaActual.getMes());
               
            }
        }
        else if(fechaFin.getMes()===0){
            aniosTrabajados = fechaFin.getAnio()-fechaInicio.getAnio() ;
            mesesTrabajados = 0;
          
        }
        else if(fechaInicio.getMes()===0){
            aniosTrabajados = fechaFin.getAnio()-fechaInicio.getAnio();
            mesesTrabajados = 0;
          
        }
        else{
            if (fechaInicio.getMes()> fechaFin.getMes()){
                aniosTrabajados = fechaFin.getAnio()-fechaInicio.getAnio()-1;
            }
            else{
                aniosTrabajados = fechaFin.getAnio()-fechaInicio.getAnio();
            }
            mesesTrabajados = calculaMeses(fechaInicio.getMes(),fechaFin.getMes());
                      
        };
        const anio:string = aniosTrabajados === 1? 'año':'años';
        const mes:string = aniosTrabajados === 1? 'mes':'meses';
        return aniosTrabajados ===0 && mesesTrabajados === 0 ? '':aniosTrabajados === 0 ? `${mesesTrabajados} ${mes}`:mesesTrabajados===0?`${aniosTrabajados} ${anio}`:`${aniosTrabajados} ${anio} ${mesesTrabajados} ${mes}`
       

      
    }
}
