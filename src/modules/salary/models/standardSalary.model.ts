import { Schema, Document } from 'mongoose';

const StandardSalarySchema = new Schema(
  {
    standardSalary: { type: Number, required: true, default: 100000 },
  },
  { timestamps: true, collection: 'StandardSalary' },
);

export { StandardSalarySchema };
export interface StandardSalary extends Document {
  standardSalary: number;
}
