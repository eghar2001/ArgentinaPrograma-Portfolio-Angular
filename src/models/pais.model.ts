import { Provincia } from "./provincia.model";

export interface Pais{
    id:number,
    nombre:string,
    provincias:Provincia[];
}