/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UserService } from 'src/service/user.service';
@Controller('/api/v1/user')
export class UserController { 
    constructor(private userService: UserService) {}

    @ApiOperation({ summary: 'User Signup' })
    @ApiBody({ type: CreateUserDto })
    @Post('/signup')

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
        console.log('Function: Signup', err);
        return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Error: User not created!', error: 'Bad Request' });
    }
  }
}
