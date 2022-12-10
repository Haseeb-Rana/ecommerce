/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument,User } from 'src/model/user.schema';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) { }

    async signup(user: CreateUserDto): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        return await new this.userModel( {
            username: user.username,
            password: hash,
            userType: user.userType }).save();
    }

    async findOne(condition : any) {
        return this.userModel.findOne(condition).lean();
    }
}
