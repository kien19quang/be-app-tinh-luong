import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeachersSchema } from './models/teachers.model';
import { TeachearsController } from './controllers/teachers.controller';
import { TeachersService } from './services/teachers.sevice';
import { ClassesModule } from '../classes/classes.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teachers', schema: TeachersSchema }]),
    forwardRef(() => ClassesModule),
  ],
  controllers: [TeachearsController],
  providers: [TeachersService],
  exports: [TeachersService],
})
export class TeachersModule {}
