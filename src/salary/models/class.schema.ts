import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as SchemaMongoose } from "mongoose";
import { Subject } from './subject.schema'
import { Teacher } from "./teacher.schema";

export type ClassDocument = HydratedDocument<Class>

@Schema()
export class Class {
    @Prop({required: true, unique:true})
    className: string

    @Prop({default:20})
    number_of_student: number

    @Prop()
    periods: number

    @Prop({
        type: SchemaMongoose.Types.ObjectId,
        ref: Subject.name
    })
    SubjectID: string

    @Prop({
        type: SchemaMongoose.Types.ObjectId,
        ref: 'Teacher'
    })
    TeacherID: Teacher[];

}

export const ClassSchema = SchemaFactory.createForClass(Class)

