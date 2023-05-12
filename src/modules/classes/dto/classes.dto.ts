import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ClassDto {
  @ApiProperty()
  _id: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  Subject: string;

  @IsNotEmpty()
  @ApiProperty()
  Teacher: string;

  @IsNotEmpty()
  @ApiProperty()
  studentNumber: number;
}
