import { CreateUserDto } from "./dto/create-user.dto";
import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { UserService } from "src/app/user/user.service";
import SWAGGER from "src/common/constants-swagger";

// ANCHOR user controller
@ApiTags(SWAGGER.USER.TAG)
@Controller(SWAGGER.USER.URL)
export class UserController {
  constructor(private userService: UserService) {}

  // ANCHOR ユーザーリスト API
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.USER.USER_LIST.RES_200,
  })
  @ApiOperation({
    summary: SWAGGER.USER.USER_LIST.SUMMARY,
    description: SWAGGER.USER.USER_LIST.DESC,
  })
  @Get(SWAGGER.USER.USER_LIST.URL)
  async userList(@Res() res: Response) {
    // find user lidt
    const userList = await this.userService.findUserList();

    // return response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.USER.USER_LIST.MSG.OK,
      data: userList,
    });
  }

  // ANCHOR ユーザー登録 API
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.USER.CREATE_USER.RES_200,
  })
  @ApiOperation({
    summary: SWAGGER.USER.CREATE_USER.SUMMARY,
    description: SWAGGER.USER.CREATE_USER.DESC,
  })
  @Post(SWAGGER.USER.CREATE_USER.URL)
  async createUser(@Res() res: Response, @Body() dto: CreateUserDto) {
    // create user
    await this.userService.createUser(dto);

    // return response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.USER.CREATE_USER.MSG.OK,
      data: null,
    });
  }
}
