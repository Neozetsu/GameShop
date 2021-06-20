import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.entity";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ title: 'Уникальный идентификатор', example: 42 })
    id: number;
    
    @Column({ nullable: true })
    @ApiProperty({ title: 'Название роли', example: 'ADMIN' })
    value: string;

    @Column({ nullable: true })
    @ApiProperty({ title: 'Описание роли', example: 'Администратор' })
    description: string;
}