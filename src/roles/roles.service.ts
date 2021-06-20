import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRoleDto } from "./dto/create-roles.dto";
import { Role } from "./roles.entity";

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private rolesRepository: Repository<Role>) {}

    async createRole(createRoleDto: CreateRoleDto) {
        return await this.rolesRepository.save(createRoleDto);
    }

    async getRoleByValue(value: string) {
        return await this.rolesRepository.findOne({ value: value });
    }
}