import { IsNotEmpty, Length, Max , Min} from "class-validator"

export class ClassDto {
    @IsNotEmpty()
    className: string;

    @IsNotEmpty()
    number_of_student: number;

    @IsNotEmpty()
    periods: number;

}
