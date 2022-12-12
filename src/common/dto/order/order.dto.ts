import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class OrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly product: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly seller: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly buyer: number;
    
}



