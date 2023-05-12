import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Classes } from '../models/classes.model';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { ClassDto } from '../dto/classes.dto';
import { TeachersService } from 'src/modules/teachers/services/teachers.sevice';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel('Classes') private classesModel: Model<Classes>,
    @Inject(forwardRef(() => TeachersService))
    private teacherSevice: TeachersService,
  ) {}

  async getAllClass() {
    const response = await this.classesModel.find();
    for (let i = 0; i < response.length; i++) {
      await response[i].populate({
        path: 'Subject',
        select: '_id name subjectCode lession',
      });
      await response[i].populate({ path: 'Teacher', select: '_id name ' });
    }
    return response;
  }

  async findClass(filter: FilterQuery<Classes>) {
    return await this.classesModel.find(filter);
  }

  async updateManyClass(
    filter?: FilterQuery<Classes>,
    update?: UpdateQuery<Classes>,
  ) {
    return await this.classesModel.updateMany(filter, update);
  }

  async createClass(classDto: ClassDto) {
    const createdClass = new this.classesModel(classDto);

    const teacher = await this.teacherSevice.getOneTeacher({
      _id: createdClass.Teacher,
    });
    teacher.Classes.push(createdClass._id);
    await teacher.save();
    const newClass = await createdClass.save();
    await newClass.populate({
      path: 'Subject',
      select: '_id name subjectCode lession',
    });
    await newClass.populate({ path: 'Teacher', select: '_id name' });
    return newClass;
  }

  async updateClass(data: ClassDto) {
    const response = await this.classesModel.findOneAndUpdate(
      { _id: data._id },
      data,
      { new: true },
    );
    const newTeacher = await this.teacherSevice.getOneTeacher({
      _id: response.Teacher,
    });
    const oldTeacher = await this.teacherSevice.getOneTeacher({
      Classes: { $in: response._id },
      _id: { $ne: response.Teacher },
    });

    if (oldTeacher) {
      oldTeacher.Classes = oldTeacher.Classes.filter(
        (item) => item.toString() !== response._id.toString(),
      );
      await oldTeacher.save();
    }
    const existClass = newTeacher.Classes.find(
      (item) => item.toString() === response._id.toString(),
    );
    if (!existClass) {
      newTeacher.Classes.push(response._id);
      await newTeacher.save();
    }

    await response.populate({
      path: 'Subject',
      select: '_id name subjectCode lession',
    });
    await response.populate({ path: 'Teacher', select: '_id name' });
    return response;
  }

  async deleteClass(id: string) {
    return await this.classesModel
      .deleteOne({ _id: id })
      .then(async () => {
        const teacher = await this.teacherSevice.getOneTeacher({
          Classes: { $in: id },
        });
        if (teacher) {
          teacher.Classes = teacher.Classes.filter(
            (item) => item.toString() !== id.toString(),
          );
          await teacher.save();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
