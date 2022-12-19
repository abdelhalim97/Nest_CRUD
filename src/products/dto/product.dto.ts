import { IsNumber, IsString } from "class-validator";

export class BuyProductDto {
    @IsNumber()
    quantity: number;
}
export class CreateProductDto {
    @IsString()
    name: string;
    @IsNumber()
    quantity: number;
}
