import { Controller, Post, Param, Body } from '@nestjs/common';
import { CreateUserProduct } from 'src/utils/user.types';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }
    //realtionship oneToOne

}
