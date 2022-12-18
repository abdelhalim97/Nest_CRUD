import { Controller, Post, Body, Param } from '@nestjs/common';
import { createUser } from 'src/tasks/dto/create-user.dto';
import { CreateUserProduct } from 'src/utils/user.types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post()
    async createUser(@Body() userParams: createUser) {
        this.usersService.createUser(userParams)
    }
    @Post(':id/product')
    CreateUserProduct(@Param('id') id: string, @Body() createUserProduct: CreateUserProduct) {
        this.usersService.createUserProduct(id, createUserProduct)
    }
}
