import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { RulesQualifications } from 'src/shared/rules.enum';

export class TeacherDto {
  @ApiProperty()
  _id: string;

  stt: number;

  @ApiProperty()
  teacherCode: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsNotEmpty()
  @ApiProperty()
  phoneNumber: string;

  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  dob: Date;

  @IsNotEmpty()
  @ApiProperty()
  cmnd: string;

  @IsNotEmpty()
  @IsEnum(RulesQualifications)
  @ApiProperty({ enum: RulesQualifications })
  degree: string;

  @ApiProperty()
  Classes: string[];
}
