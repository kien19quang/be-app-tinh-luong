import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TeachersService } from '../services/teachers.sevice';
import { ApiTags } from '@nestjs/swagger';
import { TeacherDto } from '../dto/teachers.dto';
import { ApiResponseSuccessDto } from 'src/shared/response/response.dto';

@ApiTags('Teachers')
@Controller('teachers')
export class TeachearsController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get('get')
  @ApiResponseSuccessDto(TeacherDto, true)
  async getAllTeacher() {
    const response = await this.teachersService.getAllTeacher();
    return {
      success: true,
      data: response,
    };
  }

  @Post('create')
  @ApiResponseSuccessDto(TeacherDto)
  async createTeacher(@Body() data: TeacherDto) {
    const response = await this.teachersService.createTeacher(data);
    return {
      success: true,
      data: response,
    };
  }

  @Put('update')
  @ApiResponseSuccessDto(TeacherDto)
  async updateTeacher(@Body() data: TeacherDto) {
    const response = await this.teachersService.updateTeacher(data);
    return {
      success: true,
      data: response,
    };
  }

  @Delete('delete')
  async deleteTeacher(@Query('id') id: string) {
    await this.teachersService.deleteTeacher(id);
    return { success: true };
  }
}
