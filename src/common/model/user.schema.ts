import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { USER_ROLE } from "src/common/utils/constants";

export type UserDocument = User & Document;


@Schema({ timestamps: true })
export class User {

    @Prop({required:true, unique:true, lowercase:true })
    username: string;

    @Prop({required:true, select: false })
    password: string

    @Prop({type: String, required:true ,enum: USER_ROLE })
    role: USER_ROLE
}

export const UserSchema = SchemaFactory.createForClass(User)