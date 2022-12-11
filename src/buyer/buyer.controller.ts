import { Controller, Get, HttpStatus, Res, UseGuards,Request } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { USER_ROLE } from 'src/common/utils/constants';
import { UserService } from 'src/common/service/user.service';

@Controller('/api/buyer')
@ApiTags('Buyer')
@ApiBearerAuth('access-token')
export class BuyerController {

    constructor(private userService: UserService) { }

    @Roles(USER_ROLE.BUYER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ summary: 'Get a list of all sellers' })
    @Get('/list-of-sellers')
    async listSellers(@Request() req, @Res() response) {
        try {
          const sellers = await this.userService.find({ role: USER_ROLE.SELLER });
          return response.status(HttpStatus.OK).json(sellers);
        } catch(error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Error: Fetch sellers list!', error: 'Bad Request' });
        }

    }
}
