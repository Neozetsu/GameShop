import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { CreateUserDto } from "./dto/create-users.dto";
import { User } from "./users.entity";
import { UsersService } from "./users.service";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('all')
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @ApiOperation({ summary: 'Получить всех пользователей' })
    @ApiOkResponse({ description: 'Все пользователи получены', type: [User] })
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    @ApiParam({ type: 'string', name: 'User id', example: '42', description: 'Уникальный идентификатор пользователя' })
    @ApiOperation({ summary: 'Получить пользователя по id' })
    @ApiOkResponse({ description: 'Пользователь получен', type: User })
    getUserById(@Param() id: string) {
        return this.usersService.getUserById(id);
    }

    @Post('create')
    @ApiBody({ description: 'Данные о новом пользователе', type: CreateUserDto })
    @ApiOperation({ summary: 'Создать нового пользователя' })
    @ApiCreatedResponse({ description: 'Пользователь создан' })
    createUser(@Body() createUserDto: CreateUserDto) {
        this.usersService.createUser(createUserDto);
    }

    @Delete(':id')
    @ApiParam({ type: 'string', name: 'User id', example: '42', description: 'Уникальный идентификатор пользователя' })
    @ApiOperation({ summary: 'Удалить пользователя по id' })
    @ApiOkResponse({ description: 'Пользователь удалён', type: User })
    deleteUser(@Param() id: string) {
        this.usersService.deleteUser(id);
    }

    @Post('role')
    @ApiBody({ description: 'Данные о роле и пользователе', type: AddRoleDto })
    @ApiOperation({ summary: 'Добавить роль пользователю' })
    @ApiOkResponse({ description: 'Роль пользователю успешно добавлена', type: User })
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);

    }
}