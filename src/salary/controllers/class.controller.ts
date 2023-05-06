import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { ClassService } from "../services/class.service";
import { ClassDto } from "../dto/class.dto";



@Controller("Class")
export class ClassController{
    constructor(private readonly ClassService: ClassService) {}

    @Get("getClass")
    async getClass() {
        return await this.ClassService.findAll()
    }
    // @Query @Body @Params
    @Post("createClass")
    async createClass(@Body()data: ClassDto ) {
        return await this.ClassService.create(data);
    }

    @Delete("deleteClass")
    async deleteClass(@Query() data: any) {
        return await this.ClassService.delete(data._id);
    }
}