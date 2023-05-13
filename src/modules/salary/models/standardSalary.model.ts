import { Schema, Document } from 'mongoose';

const StandardSalarySchema = new Schema(
  {
    standardSalary: { type: Number, required: true, default: 100000 },
    teacherCoefficient: {
      graduate: Number,
      master: Number,
      docter: Number,
      associateProfessor: Number,
      professor: Number,
    },
  },
  { timestamps: true, collection: 'StandardSalary' },
);

export { StandardSalarySchema };
export interface StandardSalary extends Document {
  standardSalary: number;
  teacherCoefficient: {
    graduate: number;
    master: number;
    docter: number;
    associateProfessor: number;
    professor: number;
  };
}
