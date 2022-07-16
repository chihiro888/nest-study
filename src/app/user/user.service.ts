import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/api/dto/create-user.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

// ANCHOR user service
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository, "study")
    private userRepository: UserRepository
  ) {}

  // ANCHOR find user list
  async findUserList() {
    const userList = await this.userRepository.find();
    return userList;
  }

  // ANCHOR create user
  async createUser(dto: CreateUserDto) {
    const user = new User();
    user.account = dto.account;
    user.password = dto.password;
    user.username = dto.username;
    user.gender = dto.gender;
    await this.userRepository.save(user);
  }
}
