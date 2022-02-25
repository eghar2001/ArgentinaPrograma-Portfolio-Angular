export class Fecha{
    private mes:number;
    private anio:number;
    constructor(mes:number,anio:number){  
        this.mes = mes;
        this.anio = anio;
    }
    static FechaActual:Fecha = new Fecha((new Date).getMonth()+1,(new Date).getFullYear())
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
        return this.anio===0?"actualidad":this.mes===0?`${this.anio}`:`${this.getMesString()} del ${this.anio}`;
    }
    
}