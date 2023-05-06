import { IsNotEmpty, Length, Max , Min} from "class-validator"
import { Teacher } from "../models/teacher.schema";

export class SubjectDto {
    @IsNotEmpty()
    @Length(5,5)
    subjectID: string;

    @IsNotEmpty()
    subjectName: string;

    @IsNotEmpty()
    level_of_difficult: string;

    // teachers: Teacher[];

}
