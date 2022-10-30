import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/entities/profile.entity';
import { User } from 'src/entities/User.entity';
import { CreateUser, CreateUserProfile } from 'src/utils/user.types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>) { }

    createUser = async (createUserParams: CreateUser) => {
        const user = this.userRepository.create(createUserParams)
        await this.userRepository.save(user)
    }
    createUserProfile = async (id: string, CreateUserProfile: CreateUserProfile) => {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) throw new HttpException("user not found", HttpStatus.BAD_REQUEST);
        const newProfile = this.profileRepository.create(CreateUserProfile)
        const savedProfile = await this.profileRepository.save(newProfile)
        user.profile = savedProfile
        console.log(user)
        await this.userRepository.save(user)
        return user
    }
}
