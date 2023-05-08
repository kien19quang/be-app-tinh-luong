import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subjects } from '../models/subjects.model';
import { SubjectDto } from '../dto/subjects.dto';
import { ClassesService } from 'src/modules/classes/services/classes.service';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel('Subjects') private subjectsModel: Model<Subjects>,
    private classesService: ClassesService,
  ) {}

  async getAllSubject() {
    return await this.subjectsModel.find();
  }

  async createSubject(subjectDto: SubjectDto) {
    const createdSubject = new this.subjectsModel(subjectDto);
    return createdSubject.save();
  }

  async updateSubject(data: SubjectDto) {
    return await this.subjectsModel.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
    });
  }

  async deleteSubject(id: string) {
    await this.subjectsModel
      .deleteOne({ _id: id })
      .then(async () => {
        await this.classesService.updateManyClass(
          { Subject: id },
          { $unset: { Subject: '' } },
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
