import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RulesDocument = HydratedDocument<Rules> 

@Schema()
export class Rules {
    @Prop({
        default: {
            easy: 0,
            normal: 0.1,
            difficult: 0.2,
            advanced: 0.3
        },
        type: {
            easy: Number,
            normal: Number,
            difficult: Number,
            advanced: Number,
        }
    })
    coefficent_of_subject: Object

    @Prop({
        default: {
            under20: -0.5,
            from20to40: 0,
            over40: 0.2,
        },
        type: {
            under20: Number,
            from20to40: Number,
            over40: Number,
        }
    })
    coefficent_of_class: Object

    @Prop({
        default: {
            bachelor: 1.3,
            master: 1.4,
            doctor: 1.5,
            associateProfessor: 1.6,
            professor: 1.7,
        },
        type: {
            bachelor: Number,
            master: Number,
            doctor: Number,
            associateProfessor: Number,
            professor: Number,
        }
      })
    coefficent_of_degree: Object
}

export const RulesSchema = SchemaFactory.createForClass(Rules)

