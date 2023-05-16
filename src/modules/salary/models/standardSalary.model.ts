import { Schema, Document } from 'mongoose';

const StandardSalarySchema = new Schema(
  {
    standardSalary: { type: Number, required: true, default: 100000 },
    teacherCoefficient: {
      graduate: { type: Number, default: 1.3 },
      master: { type: Number, default: 1.4 },
      docter: { type: Number, default: 1.5 },
      associateProfessor: { type: Number, default: 1.6 },
      professor: { type: Number, default: 1.7 },
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
