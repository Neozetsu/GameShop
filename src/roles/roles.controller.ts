import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateRoleDto } from "./dto/create-roles.dto";
import { Role } from "./roles.entity";
import { RolesService } from "./roles.service";

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Post('create')
    @ApiBody({ description: 'Данные о новой роле', type: CreateRoleDto })
    @ApiOperation({ summary: 'Создать новую роль' })
    @ApiCreatedResponse({ description: 'Роль создана', type: Role })
    createRole(@Body() createRoleDto: CreateRoleDto) {
        return this.rolesService.createRole(createRoleDto);
    }

    @Get(':value')
    @ApiParam({ type: 'string', name: 'Role Value', example: 'ADMIN', description: 'Название роли' })
    @ApiOperation({ summary: 'Получить роль по значению' })
    @ApiOkResponse({ description: 'Роль получена', type: Role })
    getRoleByValue(@Param() value: string) {
        return this.rolesService.getRoleByValue(value);
    }
}