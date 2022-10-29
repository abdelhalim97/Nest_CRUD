import { Controller, Post, Body } from '@nestjs/common';
import { createUser } from 'src/tasks/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post()
    async createUser(@Body() userParams: createUser) {
        this.usersService.createUser(userParams)
    }
}
