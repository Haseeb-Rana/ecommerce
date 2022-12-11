import { BadRequestException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose"
export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Types.ObjectId)
    @Transform(toMongoObjectId)
    @IsNotEmpty()
    readonly product: Types.ObjectId;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Types.ObjectId)
    @Transform(toMongoObjectId)
    @IsNotEmpty()
    readonly seller: Types.ObjectId

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Types.ObjectId)
    @Transform(toMongoObjectId)
    @IsNotEmpty()
    readonly buyer: Types.ObjectId
}

export function toMongoObjectId({ value, key }): Types.ObjectId {
    if ( Types.ObjectId.isValid(value) && ( new Types.ObjectId(value).toString() === value)) {
        return new Types.ObjectId(value);
    } else {
        throw new BadRequestException(`${key} is not a valid MongoId`);
    }
}



