export interface Experiencia{
    id:number,
    institucion:string,
    tipoJornada:string,
    cargo:string,
    desde:{
        mes:number,
        anio:number
    },
    hasta:{
        mes:number,
        anio:number
    },
    fondoUrl:string;
}