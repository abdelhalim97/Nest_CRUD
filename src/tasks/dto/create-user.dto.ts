import { IsEmail, IsNotEmpty } from "class-validator";

export class createUser {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
}