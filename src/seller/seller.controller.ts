import { Body, Controller, Get, HttpStatus, Post, Request, UseGuards, Response } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorator/roles.decorator';
import { CreateProductDto } from 'src/common/dto/product/create-product.dto';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { CatalogService } from 'src/common/service/catallog.service';
import { OrderService } from 'src/common/service/order.service';
import { USER_ROLE } from 'src/common/utils/constants';

@Controller('/api/seller')
@ApiTags('Seller')
export class SellerController {

    
    constructor(private catalogService: CatalogService , private orderService: OrderService ) { }
    
    @ApiOperation({ summary: 'Create Catalog' })
    @ApiBody({ type: [CreateProductDto]})
    @Post('/create-catalog')
    async createCatalog(@Request() req ,@Body() products: CreateProductDto[]) {
        const catalogId = this.catalogService.findOne({ seller: req.user._id });
        if(!catalogId) {

        }


    }
    
    @Roles(USER_ROLE.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ summary: 'Retrieve the list of orders received by a seller' })
    @Get('/orders')
    async listOrder(@Request() req , @Response() response) {
        try {
            const orders = await this.orderService.findAll({ seller: req.user._id });
            return response.status(HttpStatus.OK).json(orders);
        } catch(error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Error: Fetch order list!', error: 'Bad Request' });
        }
    }
}
