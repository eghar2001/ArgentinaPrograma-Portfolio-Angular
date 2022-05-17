
/*
Clase que contiene metodos para la correcta muestra de fechas
*/
export class Fecha{

    /*
    Constructor, Getters y 
    */
    private mes:number;
    private anio:number;
    private dia:number;
   
    constructor(){  
        this.dia = 1;
        this.mes=1;
        this.anio=1;
       
    }   
    public getDia(){
        return this.dia;
    }
    public getMes(){
        return this.mes;
    }
    public getAnio(){
        return this.anio;
    }

    public setDia(dia:number){
        this.dia = dia;
    }
    public setMes(mes:number){
        this.mes = mes;
    }
    public setAnio(anio:number){
        this.anio = anio;
    }

    /*
        Metodos para retornar le nombre completo de una fecha dado una fehca string
    */


    /*
        retorna fecha completa 
    */
    public static getFullDateString(fechaStr:string):string{
        const fecha:Fecha = Fecha.parseFecha(fechaStr);
        return fecha.getDia() + " de " +Fecha.getMesString(fecha.getMes()) +" del "+fecha.getAnio;
    }
    /*
        retorna fecha con mes y anio
    */
    public static getPartDateString(fechaStr:string|null):string{
        if (!fechaStr){
            return "actualidad";
            
        }
        else{
            const fecha:Fecha = Fecha.parseFecha(fechaStr);
            
            return Fecha.getMesString(fecha.getMes()) +" del "+fecha.getAnio();
        }
    }


    /*
    METODOS PRIVADOS
    */ 


    /*
        Metodo que, dado un mes de tipo numero, retorna su string
    */
    private static getMesString(mes:number){
        let mesString:string;
        switch (mes){
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


     /*
        Metodo que, dada una fecha string te retorna el objeto de tipo fecha
        La idea es que solo sea utilizado por los metodos internos
     */
     private static parseFecha(fechaOri:string):Fecha{
        const regex = /\d+/g;
        const matches = fechaOri.match(regex);
        let returnFecha = new Fecha();
        if(matches!=null){
            const anio =parseInt(matches[0]);
            const mes = parseInt(matches[1]);
            const dia = parseInt(matches[2]);
            returnFecha.setAnio(anio);
            returnFecha.setMes(mes);
            returnFecha.setDia(dia);

        }
        return returnFecha;
    }
}