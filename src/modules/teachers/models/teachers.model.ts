import { Schema, Document } from 'mongoose';
import { RulesQualifications } from 'src/shared/rules.enum';

const TeachersSchema = new Schema(
  {
    stt: { type: Number, default: 1 },
    teacherCode: { type: String, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date, required: true },
    cmnd: { type: String, required: true, unique: true },
    degree: {
      type: String,
      enum: ['graduate', 'master', 'docter', 'associateProfessor', 'professor'],
      required: true,
    },
    Classes: [{ type: Schema.Types.ObjectId, ref: 'Classes' }],
  },
  { timestamps: true, collection: 'Teachers' },
);

export { TeachersSchema };
export interface Teachers extends Document {
  stt: number;
  teacherCode: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  dob: Date;
  cmnd: string;
  degree: RulesQualifications;
  Classes: string[];
}
