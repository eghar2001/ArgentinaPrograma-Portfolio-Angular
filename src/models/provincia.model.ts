export interface Provincia{
    id:number,
    nombre:string,
    localidades:{
        id:number,
        nombre:string        
    }[];
}