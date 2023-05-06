import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from '../models/teacher.schema';
import { Model } from 'mongoose';
import { TeacherDto } from '../dto/teacher.dto';
import { Class } from '../models/class.schema';

@Injectable()
export class TeacherService {
    TeacherRepository: any;
  // ClassModel: any;
  constructor(
    @InjectModel(Teacher.name) private TeacherModel: Model<Teacher>,
    @InjectModel(Class.name) private ClassModel: Model<Class>
  ) {}
  
  async create(TeacherDto: TeacherDto) {
    const createdTeacher = new this.TeacherModel(TeacherDto);
    return createdTeacher.save();
  }


  async findAll() {
    const teachers = await this.TeacherModel.find();
    for(let i = 0;i < teachers.length; i++) {
      await teachers[i].populate('classID');
  }
  return teachers
  }

  async delete(id: string) {
    return await this.TeacherModel.findOneAndDelete({_id: id});
  }
}

  // async addSubjectToTeacher(teacherId: string, subjectId: string): Promise<Teacher> {
  //   const update = { $push: { subjects: subjectId } };
  //   const options = { new: true }; // trả về tài liệu giáo viên đã được cập nhật
  //   await this.TeacherModel.findOneAndUpdate({_id: teacherId }, update, options);
  //   const teacher = await this.TeacherModel.findOne({_id: teacherId}).populate('subjects').exec();
  //   return teacher;
  // }
  