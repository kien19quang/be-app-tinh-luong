import { Injectable } from '@nestjs/common';
import { TeachersService } from 'src/modules/teachers/services/teachers.sevice';
import { SalaryDto, StandardSalaryDto } from '../dto/salary.dto';
import {
  RulesQualificationsValue,
  handleClassCoefficient,
} from 'src/shared/rules.enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StandardSalary } from '../models/standardSalary.model';

@Injectable()
export class SalaryService {
  constructor(
    @InjectModel('StandardSalary')
    private readonly standardSalaryModel: Model<StandardSalary>,
    private readonly teacherService: TeachersService,
  ) {}

  async getSalary() {
    const listTeacher = await this.teacherService.getAllTeacher();
    const listSalaryTeachers: SalaryDto[] = [];
    const dataStandardSalary = await this.getStandardSalary();
    const standardSalary = dataStandardSalary
      ? dataStandardSalary.standardSalary
      : 100000;
    for (let i = 0; i < listTeacher.length; i++) {
      const teacher = await listTeacher[i].populate({
        path: 'Classes',
        populate: { path: 'Subject' },
      });
      const listSubject = teacher?.Classes.map(
        (item) => (item as any).Subject.name,
      );
      const classAndLession = teacher?.Classes.map((item: any) => ({
        class: item.name,
        lession: item?.Subject?.lession || '',
      }));
      const sumSalary = teacher?.Classes.reduce((acc: number, cur: any) => {
        const teacherCoefficient: number =
          RulesQualificationsValue[teacher.degree];
        const classCoefficient = handleClassCoefficient(cur.studentNumber);
        const salary =
          cur.Subject.lession *
          (teacherCoefficient +
            cur.Subject.subjectCoefficients +
            classCoefficient) *
          standardSalary;
        return acc + salary;
      }, 0);
      const salaryTeacher = {
        teacherCode: teacher.teacherCode,
        nameTeacher: teacher.name,
        phoneNumber: teacher.phoneNumber,
        email: teacher.email,
        address: teacher.address,
        dob: teacher.dob,
        degree: teacher.degree,
        listSubject: listSubject,
        classAndLession: classAndLession,
        standardSalary: standardSalary,
        salary: sumSalary?.toFixed(),
      } as any;
      listSalaryTeachers.push(salaryTeacher);
    }

    return listSalaryTeachers;
  }

  async getStandardSalary() {
    return await this.standardSalaryModel.findOne().sort({ _id: -1 });
  }

  async createStandardSalary(data: StandardSalaryDto) {
    const createdStandardSalary = new this.standardSalaryModel(data);
    return createdStandardSalary.save();
  }
}
