import { TipoEducacion } from "./tipoEducacion.model"

export interface Educacion{
    id?: number,
    descripcion: string,
    fechaDesde:string,
    fechaHasta: string|null,
    nombreInstitucion: string,
    fotoInstitucionUrl: string,
    idTipoEdu?:number,
    
    /*
    Se utiliza solo para el envio a la BBDD
    */
    idPerfil?:number,
    
}