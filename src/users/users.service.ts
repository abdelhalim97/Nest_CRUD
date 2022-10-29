import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { CreateUser } from 'src/utils/user.types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>) { }

    createUser = async (createUserParams: CreateUser) => {
        const user = this.userRepository.create(createUserParams)
        await this.userRepository.save(user)
    }
}
