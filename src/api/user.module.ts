import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "src/app/user/user.repository";
import { UserService } from "src/app/user/user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository], "study")],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
