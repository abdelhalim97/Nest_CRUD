import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskDTO } from './dto/get-task.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';
import { Task, TaskStaus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }
    @Get()
    getTasks(@Query() filterDto: GetTaskDTO): Task[] {
        if (Object.keys(filterDto).length > 0) {
            return this.tasksService.getasksWithFilter(filterDto)
        }
        else {
            return this.tasksService.getTasks()
        }
    }
    @Post()
    // createTask(@Body() body):Task{
    //     return this.tasksService.createTask(body.title,body.description)
    // }
    createTask(@Body() CreateTaskDTO: CreateTaskDTO): Task {//@Body('title') title:string,@Body('description') description:string
        return this.tasksService.createTask(CreateTaskDTO)
    }
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id)
    }
    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        return this.tasksService.deleteTask(id)
    }
    @Put('/:id/status')
    updateTask(@Param('id') id: string, @Body() UpdateTaskStatusDTO: UpdateTaskStatusDTO): Task {
        const { status } = UpdateTaskStatusDTO
        return this.tasksService.updateTaskStatus(id, status)
    }
}