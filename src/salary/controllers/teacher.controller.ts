import { Body, Controller, Delete, Get, Post, Query, Put, Param } from "@nestjs/common";
import { TeacherService } from "../services/teacher.service";
import { TeacherDto } from "../dto/teacher.dto";
import { Teacher } from "../models/teacher.schema";

@Controller("Teacher")
export class TeacherController {
    constructor(private readonly TeacherService: TeacherService) {}

    @Get("getTeacher")
    async getTeacher() {
        return await this.TeacherService.findAll()
    }

    @Post("createTeacher")
    async createTeacher(@Body()data: TeacherDto ) {
        return await this.TeacherService.create(data);
    }

    @Delete("deleteTeacher")
    async deleteTeacher(@Query() data: any) {
      return await this.TeacherService.delete(data._id);
    }

  }

    // @Put("updateTeacher/:id")
    // async updateTeacher(@Param('id') _id: string, @Body() updateTeacherDto: TeacherDto) {
    //     return await this.TeacherService.updateTeacher(_id, updateTeacherDto);
    //   }

  
