import { Educacion } from "./educacion.model";
import { EducacionByTipo } from "./educacionByTipo.model";
import { Experiencia } from "./experiencia.model";
import { Perfil } from "./perfil.model";


export interface Portfolio{
   
    perfil:Perfil,
    educacionesByTipo: EducacionByTipo[],
    experiencias:Experiencia[];
   
}