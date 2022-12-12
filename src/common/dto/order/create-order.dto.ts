import { BadRequestException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "mongoose"
export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly _id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
    
}



