import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as SchemaMongoose } from "mongoose";
import { Class } from "./class.schema";

export type TeacherDocument = HydratedDocument<Teacher>

@Schema()
export class Teacher  {
    @Prop({required: true, unique: true})
    teacherID: string

    @Prop({required: true})
    name: string

    @Prop()
    address: string

    @Prop()
    birthday: Date
    
    @Prop({required: true})
    email: string

    @Prop({required: true})
    degree : string

    @Prop({ 
        type: SchemaMongoose.Types.ObjectId, 
        ref: Class.name 
    })
    classID: Class[];

}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);