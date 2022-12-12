import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import mongoose from "mongoose";
export class GetCatalogDto {

    @ApiProperty({ type: mongoose.Types.ObjectId })
    @IsNotEmpty()
    @IsString()
    readonly seller_id: mongoose.Types.ObjectId;
}
