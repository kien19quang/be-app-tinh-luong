import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { RulesLevelOfDifficultSubject } from 'src/shared/rules.enum';

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
  @ApiProperty({ enum: RulesLevelOfDifficultSubject })
  @IsEnum(RulesLevelOfDifficultSubject)
  levelOfDifficult: string;
}
