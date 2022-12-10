/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from 'src/common/dto/user/create-user.dto';
import { LoginUserDto } from 'src/common/dto/user/login-user.dto';
import { UserService } from 'src/user/user.service';
@Controller('/api/v1/user')
export class UserController { 
    constructor(private userService: UserService) {}

    // @ApiOperation({ summary: 'User Signup' })
    // @ApiBody({ type: CreateUserDto })
    // @ApiBearerAuth('JWT-auth')
    // @Post('/signup')

    // async Signup(@Res() response: any, @Body() user: CreateUserDto) {
    // try {
    //   const { username } = user;
    //   const userInfo = await this.userService.findOne({ username });
    //   if (userInfo) {
    //     throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    //   }
    //   const newUser = await this.userService.signup(user);
    //   return response.status(HttpStatus.CREATED).json({ message: 'User has been created successfully', user: newUser });
    // } catch (err) {
    //     return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Error: User not created!', error: 'Bad Request' });
    // }
    // }

    // @ApiOperation({ summary: 'User Login' })
    // @ApiBody({ type: LoginUserDto })
    // @Post('/login')
    // async Login(@Res() response: any, @Body() user: LoginUserDto) {
    //   console.log('Function Login', user);

    // }
}
