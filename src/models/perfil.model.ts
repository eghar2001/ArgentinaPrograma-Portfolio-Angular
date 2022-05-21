


import { RedPerfil,  } from "./redPerfil.model";
import { RedSocial } from "./redSocial.model";

export interface Perfil{
    id:number,
    nombre: string,
    apellido:string,
    fechaNac: string,
    profesion:string,
    edad?:number,    
    perfilUrl: string,
    bannerUrl:string,
    localidad: string,
    provincia:string,
    redesSociales: RedPerfil[]
}