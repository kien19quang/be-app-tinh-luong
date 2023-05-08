import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { RulesQualifications } from 'src/shared/rules.enum';

export class ClassAndLession {
  @ApiProperty()
  class: string;

  @ApiProperty()
  lession: string;
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

export class StandardSalaryDto {
  @IsNotEmpty()
  @ApiProperty({ default: 100000, type: Number })
  standardSalary: number;
}
