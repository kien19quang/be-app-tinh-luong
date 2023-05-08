import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType } from 'mongoose';
import { Teachers } from '../models/teachers.model';
import { TeacherDto } from '../dto/teachers.dto';
import { ClassesService } from 'src/modules/classes/services/classes.service';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel('Teachers') private teachersModel: Model<Teachers>,
    @Inject(forwardRef(() => ClassesService))
    private classService: ClassesService,
  ) {}

  async getAllTeacher(
    filter?: FilterQuery<Teachers>,
    projection?: ProjectionType<Teachers>,
  ) {
    return await this.teachersModel.find(filter, projection);
  }

  async getOneTeacher(
    filter: FilterQuery<Teachers>,
    projection?: ProjectionType<Teachers>,
  ) {
    return await this.teachersModel.findOne(filter, projection);
  }

  async createTeacher(data: TeacherDto) {
    const lastStudent = await this.teachersModel
      .findOne()
      .sort({ stt: -1 })
      .exec();
    const stt = lastStudent ? lastStudent.stt + 1 : 1;
    const teacherCode = `G${stt}`;
    data = { ...data, teacherCode: teacherCode };
    const createdTeacher = new this.teachersModel(data);
    return createdTeacher.save();
  }

  async updateTeacher(data: TeacherDto) {
    return await this.teachersModel.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
    });
  }

  async deleteTeacher(id: string) {
    return await this.teachersModel
      .deleteOne({ _id: id })
      .then(async () => {
        await this.classService.updateManyClass(
          { Teacher: id },
          { $unset: { Teacher: '' } },
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
