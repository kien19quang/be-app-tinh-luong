import { Schema, Document } from 'mongoose';

const SubjectsSchema = new Schema(
  {
    subjectCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lession: { type: Number, required: true },
    subjectCoefficients: {
      type: Number,
      enum: [1, 1.1, 1.2, 1.3],
      required: true,
    },
  },
  { timestamps: true, collection: 'Subjects' },
);

export { SubjectsSchema };

export interface Subjects extends Document {
  subjectCode: string;
  name: string;
  lession: number;
  subjectCoefficients: number;
}
