import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { USER_TYPE } from "src/common/utils/constants";
export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({ enum: [USER_TYPE.BUYER, USER_TYPE.SELLER]})
    @IsNotEmpty()
    @IsEnum(USER_TYPE)
    readonly userType: USER_TYPE;
}
