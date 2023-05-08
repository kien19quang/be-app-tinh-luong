import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesSchema } from './models/classes.model';
import { ClassesController } from './controllers/classes.controller';
import { ClassesService } from './services/classes.service';
import { TeachersModule } from '../teachers/teachers.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Classes', schema: ClassesSchema }]),
    forwardRef(() => TeachersModule),
  ],
  controllers: [ClassesController],
  providers: [ClassesService],
  exports: [ClassesService],
})
export class ClassesModule {}
