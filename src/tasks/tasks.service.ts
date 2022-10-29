import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UpdateTask } from '../utils/task.model';
import { CreateTaskDTO } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { CreateUserProfile } from '../utils/user.types';
import { User } from 'src/entities/User.entity';
import { Profile } from 'src/entities/profile.entity';
@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>,
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>) { }

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
