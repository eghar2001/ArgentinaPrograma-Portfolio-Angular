import { Skill } from "./skill.model";
import { TipoSkill } from "./tipoSkill.model";

export interface SkillsByTipo{
    tipoSkill:TipoSkill;
    skills:Skill[]
}