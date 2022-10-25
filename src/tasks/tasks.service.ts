import { Injectable } from '@nestjs/common';
import { Task, TaskStaus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskDTO } from './dto/get-task.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTasks = (): Task[] => this.tasks;

    getasksWithFilter = (filterDto: GetTaskDTO): Task[] => {
        const { status, search } = filterDto
        let tasks = this.getTasks()
        if (status) {
            tasks = tasks.filter((task) => task.status === status)
        }
        if (search) {
            tasks = tasks.filter((task) => {
                if (task.title.includes(search) || task.description.includes(search)) {
                    return true
                }
                return false
            })
        }
        return tasks
    }

    createTask = ({ title, description }: CreateTaskDTO): Task => {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStaus.OPEN,
        };
        this.tasks.push(task);
        return task;
    };
    getTaskById = (id: string): Task => {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new NotFoundException()
        }
        return task
    }
    deleteTask(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTaskStatus = (id: string, status: TaskStaus): Task => {
        this.tasks.map(task => task.id === id ? task.status = status : true)
        return this.getTaskById(id)
    }
}
