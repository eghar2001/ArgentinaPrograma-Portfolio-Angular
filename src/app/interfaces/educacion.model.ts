export interface Educacion{
    id:number,
    institucion:string,
    estudio:string,
    desde:{
        mes:number,
        anio:number
    },
    hasta:{
        mes:number,
        anio:number
    },
    logoUrl:string;
}