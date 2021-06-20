import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ title: 'Логин пользователя', example: 'username' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 20, { message: 'От 4 до 20 символов' })
    readonly login: string;
    
    @ApiProperty({ title: 'Пароль пользователя', example: 'qwerty123' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 20, { message: 'От 4 до 20 символов' })
    readonly password: string;
}