import { CreateUserDto } from "./dto/create-user.dto";
import { Response } from "express";
import { UserService } from "src/app/user/user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    userList(res: Response): Promise<void>;
    createUser(res: Response, dto: CreateUserDto): Promise<void>;
}
