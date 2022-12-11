import { Body, Controller, Get, HttpStatus, Post, Request, Response, UseGuards, HttpException } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorator/roles.decorator';
import { CreateCatalogDto } from 'src/common/dto/catalog/create-catalog';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { CatalogService } from 'src/common/service/catallog.service';
import { OrderService } from 'src/common/service/order.service';
import { ProductService } from 'src/common/service/product.service';
import { USER_ROLE } from 'src/common/utils/constants';

@Controller('/api/seller')
@ApiTags('Seller')
export class SellerController {

    
    constructor(private catalogService: CatalogService , private orderService: OrderService, private productService: ProductService ) { }
    
    @Roles(USER_ROLE.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ summary: 'Create Catalog' })
    @ApiBody({ type: CreateCatalogDto })
    @Post('/create-catalog')
    async createCatalog(@Response() response, @Request() req ,@Body() catalog: CreateCatalogDto) {
        try {
            let { products } = catalog;
            let catalogInfo = await this.catalogService.findOne({ seller: req.user._id });
            if(catalogInfo) {
              throw new HttpException('Catalog already exists', HttpStatus.BAD_REQUEST);
            } else {
                
            catalogInfo = await this.catalogService.create({ name: catalog.name, description: catalog.description, seller: req.user._id })
            products = products.map((product: any ) => {
                return { ...product, seller: req.user._id }
            });
            const productList = await this.productService.addProduct(products);
            catalogInfo['products'] = productList;
            return response.status(HttpStatus.CREATED).json(catalogInfo);
            }

        } catch(error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: error.message, error: 'Bad Request' });
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
