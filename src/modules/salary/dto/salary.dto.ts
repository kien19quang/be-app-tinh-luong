import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { RulesQualifications } from 'src/shared/rules.enum';

export class ClassAndLession {
  @ApiProperty()
  class: string;

  @ApiProperty()
  lession: string;

  @ApiProperty()
  salary?: number;
}

export class SalaryDto {
  @ApiProperty()
  teacherCode: string;

  @ApiProperty()
  nameTeacher: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  dob: Date;

  @ApiProperty({
    enum: RulesQualifications,
    default: RulesQualifications.graduate,
  })
  degree: string;

  @ApiProperty()
  listSubject: string[];

  @ApiProperty({ type: ClassAndLession, isArray: true })
  ClassAndLession: ClassAndLession[];

  @ApiProperty()
  standardSalary: number;

  @ApiProperty()
  salary: number;
}

export class TeacherCoefficient {
  @ApiProperty()
  @IsNotEmpty()
  graduate: number;

  @ApiProperty()
  @IsNotEmpty()
  master: number;

  @ApiProperty()
  @IsNotEmpty()
  docter: number;

  @ApiProperty()
  @IsNotEmpty()
  associateProfessor: number;

  @ApiProperty()
  @IsNotEmpty()
  professor: number;
}
export class StandardSalaryDto {
  @ApiProperty()
  _id?: string;

  @IsNotEmpty()
  @ApiProperty({ default: 100000, type: Number })
  standardSalary: number;

  @ApiProperty()
  teacherCoefficient: TeacherCoefficient;
}
