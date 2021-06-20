import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RolesService } from "src/roles/roles.service";
import { Repository } from "typeorm";
import { AddRoleDto } from "./dto/add-role.dto";

import { CreateUserDto } from "./dto/create-users.dto";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>, 
                private rolesService: RolesService) {}

    async getAllUsers() {
        return await this.usersRepository.find({relations: ['roles']});
    }

    async getUserById(id: string) {
        return await this.usersRepository.findOne({ id: Number(id) });
    }
    
    async createUser(createUserDto: CreateUserDto) {
        const role = await this.rolesService.getRoleByValue("ADMIN");
        const user = await this.usersRepository.create(
            {...createUserDto, 
                roles: [role]
            });
        return this.usersRepository.save(user);
    }

    async deleteUser(id: string) {
        const user = await this.getUserById(id);
        return await this.usersRepository.remove(user);   
    }
    
    async getUserByLogin(login: string) {
        return await this.usersRepository.findOne({login: login});
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.usersRepository.findOne({where: { id: dto.userId }, relations: ['roles']});
        const role = await this.rolesService.getRoleByValue(dto.value);
        if (role && user) {
            user.roles.push(role);
            return this.usersRepository.save(user);
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }
}