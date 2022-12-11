import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDefined, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateProductDto } from "../product/create-product.dto";
export class CreateCatalogDto {
    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty()
    @IsDefined()
    @IsArray()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CreateProductDto)
    readonly products: CreateProductDto[];

}
