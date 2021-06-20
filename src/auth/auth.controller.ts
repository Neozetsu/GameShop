import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-users.dto";
import { User } from "src/users/users.entity";
import { AuthService } from "./auth.service";

@ApiTags('Аунтефикация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @ApiOperation({ summary: 'Авторизовать пользователя' })
    @ApiBody({ description: 'Данные о пользователе', type: CreateUserDto })
    @ApiOkResponse({ description: 'Пользователь авторитизирован, токен получен', type: String })
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post('registration')
    @ApiOperation({ summary: 'Создать нового пользователя' })
    @ApiBody({ description: 'Данные о новом пользователе', type: CreateUserDto })
    @ApiCreatedResponse({ description: 'Пользователь создан, токен получен', type: String })
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

}