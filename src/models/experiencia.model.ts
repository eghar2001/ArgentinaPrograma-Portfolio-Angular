import { TipoJornada } from "./tipoJornada.model";


export interface Experiencia{
    id?: number,
    idPerfil?:number,
    nombreInstitucion: string,
    tipoJornada: TipoJornada,
    fechaDesde:string,
    fechaHasta: string|null,
    periodo?:string,
    cargo:string,
    fondoUrl: string
}