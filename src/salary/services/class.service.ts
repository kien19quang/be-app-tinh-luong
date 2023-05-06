import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Class } from "../models/class.schema";
import { Model } from 'mongoose';
import { ClassDto } from "../dto/class.dto";


@Injectable()
export class ClassService{
    constructor(
        @InjectModel(Class.name) private classModel: Model<Class>,
        ) {}

    async create(ClassDto:ClassDto){
        const createdClass = new this.classModel(ClassDto);
        return createdClass.save();
    }

    async findAll() {
        const classes = await this.classModel.find();
        for(let i = 0;i < classes.length; i++) {
            await classes[i].populate('SubjectID');
            await classes[i].populate('TeacherID');
        }
        return classes
    }

    async delete(id: string){
        return await this.classModel.findOneAndDelete({_id: id});
    }
}