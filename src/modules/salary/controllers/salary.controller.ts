import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SalaryService } from '../services/salary.service';
import { ApiResponseSuccessDto } from 'src/shared/response/response.dto';
import { SalaryDto, StandardSalaryDto } from '../dto/salary.dto';

@Controller('salary')
@ApiTags('Salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Get('get')
  @ApiResponse({ status: 200, type: SalaryDto, isArray: true })
  async getSalary() {
    const response = await this.salaryService.getSalary();
    return {
      success: true,
      data: response,
    };
  }

  @Get('getStandardSalary')
  @ApiResponseSuccessDto(StandardSalaryDto)
  async getStandardSalary() {
    let response = await this.salaryService.getStandardSalary();
    if (!response) {
      response = await this.salaryService.createStandardSalary({
        standardSalary: 100000,
        teacherCoefficient: {
          graduate: 1.3,
          master: 1.4,
          docter: 1.5,
          associateProfessor: 1.6,
          professor: 1.7,
        },
      });
    }
    return {
      success: true,
      data: response,
    };
  }

  @Post('createStandardSalary')
  @ApiResponseSuccessDto(StandardSalaryDto)
  async createStandardSalary(@Body() data: StandardSalaryDto) {
    const response = await this.salaryService.createStandardSalary(data);
    return {
      success: true,
      data: response,
    };
  }
}
