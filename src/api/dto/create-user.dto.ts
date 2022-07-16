import { ApiProperty } from "@nestjs/swagger";
import MESSAGE from "src/common/constants-message";

export class CreateUserDto {
  @ApiProperty({
    description: MESSAGE.ACCOUNT,
    example: MESSAGE.ACCOUNT_EXAMPLE,
  })
  account: string;

  @ApiProperty({
    description: MESSAGE.PASSWORD,
    example: MESSAGE.PASSWORD_EXAMPLE,
  })
  password: string;

  @ApiProperty({
    description: MESSAGE.USERNAME,
    example: MESSAGE.USERNAME_EXAMPLE,
  })
  username: string;

  @ApiProperty({
    description: MESSAGE.GENDER,
    example: MESSAGE.GENDER_EXAMPLE,
  })
  gender: string;
}
