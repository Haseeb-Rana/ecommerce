import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { USER_ROLE } from "src/common/utils/constants";
export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({ enum: [USER_ROLE.BUYER, USER_ROLE.SELLER]})
    @IsNotEmpty()
    @IsEnum(USER_ROLE)
    readonly userType: USER_ROLE;
}
