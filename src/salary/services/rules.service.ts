import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Rules } from "../models/rules.schema";
import { Model } from 'mongoose';
import { RulesDto } from "../dto/rules.dto";


@Injectable()
export class RulesService{
    constructor(
        @InjectModel(Rules.name) private rulesModel: Model<Rules>,
        ) {}

    async create(RulesDto:RulesDto){
        const createdRules = new this.rulesModel(RulesDto);
        return createdRules.save();
    }

    async findAll() {
        return await this.rulesModel.find();
    }

    async delete(id: string){
        return await this.rulesModel.findOneAndDelete({_id: id});
    }
}