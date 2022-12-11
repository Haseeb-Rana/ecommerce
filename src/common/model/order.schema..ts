import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Types } from "mongoose";

export type OrderDocument = Order & Document;


@Schema({ timestamps: true })
export class Order {

    @Prop({ required:true, type: String,  lowercase:true })
    product: string;

    @Prop({type: Types.ObjectId, ref: 'User' })
    seller: User

    @Prop({type: Types.ObjectId, ref: 'User' })
    buyer: User
}

export const OrderSchema = SchemaFactory.createForClass(Order)