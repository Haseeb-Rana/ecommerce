import { Body, Controller, HttpException, HttpStatus, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from 'src/common/dto/user/create-user.dto';
import { LoginUserDto } from 'src/common/dto/user/login-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('/api/auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService) { }

    @UseGuards(AuthGuard('local'))
    @ApiOperation({ summary: 'User Login' })
    @ApiBody({ type: LoginUserDto})
    @Post('/login')
    async login(@Request() req, @Body() user: LoginUserDto) {
        return this.authService.login(req.user);
    }

    @ApiOperation({ summary: 'User Signup' })
    @ApiBody({ type: CreateUserDto })
    @Post('/register')

    async Signup(@Res() response: any, @Body() user: CreateUserDto) {
    try {
      const { username } = user;
      const userInfo = await this.userService.findOne({ username });
      if (userInfo) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      }
      const newUser = await this.userService.signup(user);
      return response.status(HttpStatus.CREATED).json({ message: 'User has been created successfully', user: newUser });
    } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Error: User not created!', error: 'Bad Request' });
    }
    }
}
