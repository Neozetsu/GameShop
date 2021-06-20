import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { ProductCategory } from "../products.category.enum";


export class CreateProductDto {
    @ApiProperty({ title: 'Название продукта', example: 'Logitech mouse G502' })
    @IsString({ message: 'Должно быть строкой' })
    @IsOptional()
    readonly name: string;

    @ApiProperty({ title: 'Описание продукта', example: 'Высокочувствительная игровая мышь G502' })
    @IsString({ message: 'Должно быть строкой' })
    @IsOptional()
    readonly description: string;

    @ApiProperty({ title: 'Цена продукта', example: 4500 })
    @IsNumber({}, { message: 'Должно быть числом' })
    @IsOptional()
    readonly price: number;

    @ApiProperty({ title: 'Ссылка на фото продукта', example: 'https://example.jpg' })
    @IsString({ message: 'Должно быть строкой' })
    @IsOptional()
    readonly photo: string;

    @ApiProperty({ title: 'Категория продукта', example: ProductCategory.mouses })
    @IsString({ message: 'Должно быть строкой' })
    @IsOptional()
    readonly category: ProductCategory
}