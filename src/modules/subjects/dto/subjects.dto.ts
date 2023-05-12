import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SubjectDto {
  @ApiProperty()
  _id: string;

  @IsNotEmpty()
  @ApiProperty()
  subjectCode: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  subjectCoefficients: number;

  @IsNotEmpty()
  @ApiProperty()
  lession: number;
}
