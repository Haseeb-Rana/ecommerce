import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { USER_TYPE } from "src/utils/constants";

export type UserDocument = User & Document;


@Schema({ timestamps: true })
export class User {

    @Prop({required:true, unique:true, lowercase:true })
    username: string;

    @Prop({required:true})
    password: string

    @Prop({type: String, required:true ,enum: USER_TYPE })
    userType: USER_TYPE
}

export const UserSchema = SchemaFactory.createForClass(User)