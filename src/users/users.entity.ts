import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ title: 'Уникальный идентификатор пользователя', example: '42' })
    id: number;

    @Column()
    @ApiProperty({ title: 'Имя пользователя', example: 'GreyShark' })
    login: string;

    @Column()
    @ApiProperty({ title: 'Пароль пользователя', example: 'qwerty123' })
    password: string;

    @ManyToMany(() => Role, { cascade: true })
    @JoinTable()
    roles: Role[];
}