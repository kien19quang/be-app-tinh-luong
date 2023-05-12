import { Schema, Document } from 'mongoose';

const ClassesSchema = new Schema(
  {
    name: { type: String, required: true },
    Subject: { type: Schema.Types.ObjectId, ref: 'Subjects', required: true },
    Teacher: { type: Schema.Types.ObjectId, ref: 'Teachers', required: true },
    studentNumber: { type: Number, required: true },
  },
  { timestamps: true, collection: 'Classes' },
);

export { ClassesSchema };

export interface Classes extends Document {
  _id: string;
  name: string;
  Subject: string;
  Teacher: string;
  studentNumber: number;
}
