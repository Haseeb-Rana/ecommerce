import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

export type OrderDocument = Order & Document;


@Schema({ timestamps: true })
export class Order {

    @Prop({ required:true, type: String,  lowercase:true })
    product: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name })
    seller: User

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name })
    buyer: User
}

export const OrderSchema = SchemaFactory.createForClass(Order)