import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({ title: 'Название роли', example: 'ADMIN' })
    @IsString({ message: 'Должно быть строкой' })
    @IsOptional()
    readonly value: string;

    @ApiProperty({ title: 'Описание роли', example: 'Администратор' })
    @IsString({ message: 'Должно быть строкой' })
    readonly description?: string;
}