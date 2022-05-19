import { Educacion } from "./educacion.model";

import { Experiencia } from "./experiencia.model";
import { Perfil } from "./perfil.model";
import { Skill } from "./skill.model";



export interface Portfolio{
   
    perfil:Perfil,
    educaciones: Educacion[],
    skills:Skill[],
    experiencias:Experiencia[];
   
}