import { CreateUserDto } from "src/api/dto/create-user.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    findUserList(): Promise<User[]>;
    createUser(dto: CreateUserDto): Promise<void>;
}
