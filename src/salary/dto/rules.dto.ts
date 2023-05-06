import { IsNotEmpty, Length, Max , Min} from "class-validator"

export class RulesDto {
  coefficent_of_subject: {
    easy: number;
    normal: number;
    difficult: number;
    advanced: number;
  };

  coefficent_of_class: {
    under20: number;
    from20to40: number;
    over40: number;
  };

  coefficent_of_degree: {
    bachelor: number;
    master: number;
    doctor: number;
    associateProfessor: number;
    professor: number;
  };    
}