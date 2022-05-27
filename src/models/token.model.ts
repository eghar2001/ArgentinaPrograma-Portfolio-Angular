import { Authority } from "./authority.model";

export interface Token{
    token:string,
    bearer:'Bearer',
    nombreUsuario:string,
    authorities:Authority[]
}