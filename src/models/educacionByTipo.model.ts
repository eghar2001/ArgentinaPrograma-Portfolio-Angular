import { Educacion } from "./educacion.model";
import { TipoEducacion } from "./tipoEducacion.model";

export interface EducacionByTipo{
    tipoEdu:TipoEducacion,
    educaciones:Educacion[]
}