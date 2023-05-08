import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClassesService } from '../services/classes.service';
import { ClassDto } from '../dto/classes.dto';
import { ApiResponseSuccessDto } from 'src/shared/response/response.dto';

@ApiTags('Classes')
@Controller('classes')
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @Get('get')
  @ApiResponseSuccessDto(ClassDto, true)
  async getAllClass() {
    const response = await this.classesService.getAllClass();
    return {
      success: true,
      data: response,
    };
  }

  @Post('create')
  @ApiResponseSuccessDto(ClassDto)
  async createClass(@Body() data: ClassDto) {
    const response = await this.classesService.createClass(data);
    return {
      success: true,
      data: response,
    };
  }

  @Put('update')
  @ApiResponseSuccessDto(ClassDto)
  async updateClass(@Body() data: ClassDto) {
    const response = await this.classesService.updateClass(data);
    return {
      success: true,
      data: response,
    };
  }

  @Delete('delete')
  async deleteClass(@Query('id') id: string) {
    await this.classesService.deleteClass(id);
    return {
      success: true,
    };
  }
}
