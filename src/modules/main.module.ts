import { Module } from '@nestjs/common';
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';
import { SubjectsModule } from './subjects/subjects.module';
import { SalaryModule } from './salary/salary.module';

@Module({
  imports: [TeachersModule, ClassesModule, SubjectsModule, SalaryModule],
})
export class MainModule {}
