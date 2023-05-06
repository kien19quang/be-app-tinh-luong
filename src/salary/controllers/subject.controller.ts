import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { SubjectService } from "../services/subject.service";
import { SubjectDto } from "../dto/subject.dto";



@Controller("Subject")
export class SubjectController{
    constructor(private readonly SubjectService: SubjectService) {}

    @Get("getSubject")
    async getSubject() {
        return await this.SubjectService.findAll()
    }
    // @Query @Body @Params
    @Post("createSubject")
    async createSubject(@Body()data: SubjectDto ) {
        return await this.SubjectService.create(data);
    }

    @Delete("deleteSubject")
    async deleteSubject(@Query() data: any) {
        return await this.SubjectService.delete(data._id);
    }

    @Put("updateSubject/:id")
    async updateSubject(@Param('id') _id: string, @Body() updateTeacherDto: SubjectDto) {
        return await this.SubjectService.updateSubject(_id, updateTeacherDto);
    } 

}