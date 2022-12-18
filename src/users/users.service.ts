import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/User.entity';
import { CreateUser, CreateUserProduct } from 'src/utils/user.types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Product) private productRepository: Repository<Product>) { }

    createUser = async (createUserParams: CreateUser) => {
        const user = this.userRepository.create(createUserParams)
        await this.userRepository.save(user)
    }
    createUserProduct = async (id: string, CreateUserProduct: CreateUserProduct) => {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) throw new HttpException("user not found", HttpStatus.BAD_REQUEST);
        const newProduct = this.productRepository.create(CreateUserProduct)
        const savedProduct = await this.productRepository.save(newProduct)
        user.product = savedProduct
        await this.userRepository.save(user)
        return user
    }
}
