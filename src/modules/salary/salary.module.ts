import { Module } from '@nestjs/common';
import { ClassesModule } from '../classes/classes.module';
import { TeachersModule } from '../teachers/teachers.module';
import { SalaryController } from './controllers/salary.controller';
import { SalaryService } from './services/salary.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StandardSalarySchema } from './models/standardSalary.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'StandardSalary', schema: StandardSalarySchema },
    ]),
    ClassesModule,
    TeachersModule,
  ],
  controllers: [SalaryController],
  providers: [SalaryService],
})
export class SalaryModule {}
