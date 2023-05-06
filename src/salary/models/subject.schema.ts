import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as mongoose from "mongoose";

export type SubjectDocument = HydratedDocument<Subject>

@Schema()
export class Subject {
    @Prop({required: true, unique:true})
    subjectID: string

    @Prop({required: true})
    subjectName: string

    @Prop()
    level_of_difficult: string
}


export const SubjectSchema = SchemaFactory.createForClass(Subject)


