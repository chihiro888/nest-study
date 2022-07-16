"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_user_dto_1 = require("./dto/create-user.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../app/user/user.service");
const constants_swagger_1 = require("../common/constants-swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async userList(res) {
        const userList = await this.userService.findUserList();
        res.status(common_1.HttpStatus.OK).json({
            statusCode: common_1.HttpStatus.OK,
            message: constants_swagger_1.default.USER.USER_LIST.MSG.OK,
            data: userList,
        });
    }
    async createUser(res, dto) {
        await this.userService.createUser(dto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: common_1.HttpStatus.OK,
            message: constants_swagger_1.default.USER.CREATE_USER.MSG.OK,
            data: null,
        });
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: constants_swagger_1.default.USER.USER_LIST.RES_200,
    }),
    (0, swagger_1.ApiOperation)({
        summary: constants_swagger_1.default.USER.USER_LIST.SUMMARY,
        description: constants_swagger_1.default.USER.USER_LIST.DESC,
    }),
    (0, common_1.Get)(constants_swagger_1.default.USER.USER_LIST.URL),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userList", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: constants_swagger_1.default.USER.CREATE_USER.RES_200,
    }),
    (0, swagger_1.ApiOperation)({
        summary: constants_swagger_1.default.USER.CREATE_USER.SUMMARY,
        description: constants_swagger_1.default.USER.CREATE_USER.DESC,
    }),
    (0, common_1.Post)(constants_swagger_1.default.USER.CREATE_USER.URL),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)(constants_swagger_1.default.USER.TAG),
    (0, common_1.Controller)(constants_swagger_1.default.USER.URL),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map