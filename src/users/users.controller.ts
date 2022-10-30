import { Controller, Post, Body, Param } from '@nestjs/common';
import { createUser } from 'src/tasks/dto/create-user.dto';
import { CreateUserProfile } from 'src/utils/user.types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post()
    async createUser(@Body() userParams: createUser) {
        this.usersService.createUser(userParams)
    }
    @Post(':id/profile')
    createUserProfile(@Param('id') id: string, @Body() createUserProfile: CreateUserProfile) {
        this.usersService.createUserProfile(id, createUserProfile)
    }
}
