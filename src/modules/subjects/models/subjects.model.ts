import { Schema, Document } from 'mongoose';
import { RulesLevelOfDifficultSubject } from 'src/shared/rules.enum';

const SubjectsSchema = new Schema(
  {
    subjectCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    levelOfDifficult: {
      type: String,
      enum: ['easy', 'normal', 'difficult', 'advanced'],
      required: true,
    },
  },
  { timestamps: true, collection: 'Subjects' },
);

export { SubjectsSchema };

export interface Subjects extends Document {
  subjectCode: string;
  name: string;
  levelOfDifficult: RulesLevelOfDifficultSubject;
}
