import { Body, Controller, Post,Request } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/common/dto/product/create-product.dto';
import { CatalogService } from 'src/common/service/catallog.service';
import { UserService } from 'src/common/service/user.service';

@Controller('/api/seller')
@ApiTags('Seller')
export class SellerController {

    
    constructor(private userService: UserService, private catalogService: CatalogService) { }
    
    @ApiOperation({ summary: 'Create Catalog' })
    @ApiBody({ type: [CreateProductDto]})
    @Post('/create-catalog')
    async createCatalog(@Request() req ,@Body() products: CreateProductDto[]) {
        const catalogId = this.catalogService.findOne({ seller: req.user._id });
        if(!catalogId) {

        }


    }
}
