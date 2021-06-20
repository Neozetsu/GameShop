import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { ProductCategory } from "./products.category.enum";

@Entity({name: 'Products'})
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ title: 'Уникальный идентификатор', example: 42 })
    id: number;
    
    @Column({ nullable: true })
    @ApiProperty({ title: 'Название товара', example: 'Keyboard Logitech G213' })
    name: string;

    @Column({ nullable: true })
    @ApiProperty({ title: 'Описание товара', example: 'Удобная игровая мембранная клавитура с RGB-подсветкой' })
    description: string;

    @Column({ nullable: true })
    @ApiProperty({ title: 'Цена товара', example: 7800 })
    price: number;

    @Column({ nullable: true })
    @ApiProperty({ title: 'Ссылка на фото товара', example: 'https://example.jpg' })
    photo: string;

    @Column({ nullable: true })
    @ApiProperty({ title: 'Категория товара', example: ProductCategory.keyboards })
    category: ProductCategory;
}