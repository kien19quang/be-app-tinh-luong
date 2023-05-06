import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Subject } from "../models/subject.schema";
import { Model } from 'mongoose';
import { SubjectDto } from "../dto/subject.dto";
import { Teacher } from "../models/teacher.schema";


@Injectable()
export class SubjectService{
    [x: string]: any;
    constructor(
        @InjectModel(Subject.name) private subjectModel: Model<Subject>,
        @InjectModel(Teacher.name) private TeacherModel: Model<Teacher>,

        ) {}

    async create(SubjectDto:SubjectDto){
        const createdSubject = new this.subjectModel(SubjectDto);
        return createdSubject.save();
    }

    async findAll() {
      return this.subjectModel.find().populate('teachers').exec();
    }

    async delete(id: string){
      return await this.subjectModel.findOneAndDelete({_id: id});
    }

    async updateSubject(_id: string, updateTeacherDto: any): Promise<Teacher> {
      return await this.teacherModel.findByIdAndUpdate(_id, updateTeacherDto, { new: true });
    }


    async addTeacherToSubject(_id: string, updateSubjectDto: any) {
        let Teacher
        try {
        Teacher = await this.TeacherModel.findById(Teacher._id);
        } catch (err) {
          throw new NotFoundException('Subject not found');
        }
        const Subject = await this.SubjectModel.findByIdAndUpdate(
          _id,
          { ...updateSubjectDto, $push: { teachers: Teacher._id } },
          { new: true, useFindAndModify: false },
        );
        if (!Subject) {
          throw new NotFoundException('Teacher not found');
        }
        return Subject;
      }
}