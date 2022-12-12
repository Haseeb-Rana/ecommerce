import { Controller, Get, HttpStatus, Param, Response, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Roles } from 'src/common/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { CatalogService } from 'src/common/service/catallog.service';
import { ProductService } from 'src/common/service/product.service';
import { UserService } from 'src/common/service/user.service';
import { USER_ROLE } from 'src/common/utils/constants';

@Controller('/api/buyer')
@ApiTags('Buyer')
@ApiBearerAuth('access-token')
export class BuyerController {

    constructor(private userService: UserService, private catalogService: CatalogService, private productService: ProductService) { }

    @Roles(USER_ROLE.BUYER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ summary: 'Get a list of all sellers' })
    @Get('/list-of-sellers')
    async listSellers(@Response() response) {
        try {
          const sellers = await this.userService.find({ role: USER_ROLE.SELLER });
          return response.status(HttpStatus.OK).json(sellers);
        } catch(error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Error: Fetch sellers list!', error: 'Bad Request' });
        }

    }

    @Roles(USER_ROLE.BUYER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ summary: 'Get the catalog of a seller by seller_id' })
    @ApiParam({
        name: 'seller_id',
        required: true,
        description: 'Seller id', 
        schema: { oneOf: [{ type: 'string' }]},
        type: 'string'
      })
    @Get('/seller-catalog/:seller_id')
    async getCataogBySeller(@Param('seller_id') seller_id: string, @Response() response) {
        try {
            let catalog = await this.catalogService.findOne({ seller: new mongoose.Types.ObjectId(seller_id)});
            if(!catalog) {    
              return response.status(HttpStatus.NOT_FOUND).json({ statusCode: 404, message: 'Catalog not found' });
            }
            const products = await this.productService.findAll({ catalog: catalog });
          return response.status(HttpStatus.OK).json({ ...catalog, products } );
        } catch(error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Error: Fetch sellers list!', error: 'Bad Request' });
        }

    }
}
