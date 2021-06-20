import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/users.entity";
import { RolesController } from "./roles.controller";
import { Role } from "./roles.entity";
import { RolesService } from "./roles.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Role, User])
    ],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService]
})
export class RolesModule {}