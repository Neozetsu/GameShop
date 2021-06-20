import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class AddRoleDto {
    @ApiProperty({ title: 'Название роли', example: 'ADMIN' })
    @IsString({ message: 'Должно быть строкой' })
    @IsOptional()
    readonly value: string;

    @ApiProperty({ title: 'Id пользователя', example: 42 })
    @IsNumber({}, { message: 'Должно быть числом' })
    @IsOptional()
    readonly userId: number;
}