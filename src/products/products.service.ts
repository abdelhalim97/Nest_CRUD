import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/User.entity';
import { CreateUserProduct } from 'src/utils/user.types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Product) private productRepository: Repository<Product>) { }


}
