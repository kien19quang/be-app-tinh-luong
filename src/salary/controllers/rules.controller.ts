import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { RulesService } from "../services/rules.service";
import { RulesDto } from "../dto/rules.dto";



@Controller("Rules")
export class RulesController{
    constructor(private readonly RulesService: RulesService) {}

    @Get("getRules")
    async getRules() {
        return await this.RulesService.findAll()
    }
    
    @Post("createRules")
    async createRules(@Body()data: RulesDto ) {
        return await this.RulesService.create(data);
    }

    @Delete("deleteRules")
    async deleteRules(@Query() data: any) {
        return await this.RulesService.delete(data._id);
    }
}