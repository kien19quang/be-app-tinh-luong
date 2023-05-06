import { IsNotEmpty, Length , IsEmail} from "class-validator"
import { Subject } from "../models/subject.schema";

export class TeacherDto {
    @IsNotEmpty()
    @Length(6,6)
    teacherID: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    birthday: Date;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    degree: string;

    // subjects: Subject[];
}