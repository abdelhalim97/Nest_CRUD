import { Injectable } from '@nestjs/common';
import { UpdateTask } from './utils/task.model';//Task,
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskDTO } from './dto/get-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';
@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) { }

    getTasks = () => this.taskRepository.find()

    createTask = ({ title, description }: CreateTaskDTO) => {
        const newUser = this.taskRepository.create({ title, description, createdAt: new Date() })
        return this.taskRepository.save(newUser)
    };
    getTaskById = (id: string) => {
        this.taskRepository.findOneBy({ id })
    }
    deleteTask(id: string) {
        this.taskRepository.delete({ id })
    }
    updateTask = (id: string, updateTaskDetails: UpdateTask) => {
        return this.taskRepository.update({ id }, { ...updateTaskDetails })
    }
}
