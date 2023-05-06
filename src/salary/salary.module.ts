import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './models/teacher.schema';
import { TeacherService } from './services/teacher.service';
import { SubjectService } from './services/subject.service';
import { ClassService } from './services/class.service';
import { TeacherController } from './controllers/teacher.controller';
import { Subject, SubjectSchema } from './models/subject.schema';
import { Class, ClassSchema } from './models/class.schema';
import { SubjectController } from './controllers/subject.controller';
import { ClassController } from './controllers/class.controller';
import { Rules, RulesSchema } from './models/rules.schema';
import { RulesController } from './controllers/rules.controller';
import { RulesService } from './services/rules.service';


@Module({
    imports: [
        MongooseModule.forFeature([
          { name: Teacher.name, schema: TeacherSchema },
          { name: Subject.name, schema: SubjectSchema},
          { name: Class.name, schema: ClassSchema},
          { name: Rules.name, schema: RulesSchema}
        ]),
      ],
      controllers: [TeacherController, SubjectController, ClassController, RulesController],
      providers: [TeacherService, SubjectService, ClassService, RulesService],
})
export class SalaryModule {}
