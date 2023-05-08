import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SubjectsService } from '../services/subjects.service';
import { SubjectDto } from '../dto/subjects.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseSuccessDto } from 'src/shared/response/response.dto';

@ApiTags('Subjects')
@Controller('subject')
export class SubjectsController {
  constructor(private readonly subjectsSerivce: SubjectsService) {}

  @Get('get')
  @ApiResponseSuccessDto(SubjectDto, true)
  async getAllSubject() {
    const response = await this.subjectsSerivce.getAllSubject();
    return {
      success: true,
      data: response,
    };
  }

  @Post('create')
  @ApiResponseSuccessDto(SubjectDto)
  async createSubject(@Body() subjectDto: SubjectDto) {
    const response = await this.subjectsSerivce.createSubject(subjectDto);
    return {
      success: true,
      data: response,
    };
  }

  @Put('update')
  @ApiResponseSuccessDto(SubjectDto)
  async updateSubject(@Body() data: SubjectDto) {
    const response = await this.subjectsSerivce.updateSubject(data);
    return {
      success: true,
      data: response,
    };
  }

  @Delete('delete')
  async deleteSubject(@Query('id') id: string) {
    await this.subjectsSerivce.deleteSubject(id);
    return { success: true };
  }
}
