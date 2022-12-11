import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Catalog } from "./catalog.schema";
import { Types } from "mongoose";

export type ProductDocument = Product & Document;


@Schema({ timestamps: true })
export class Product {

    @Prop({ required:true })
    name: string;

    @Prop({ required:true })
    price: number;

    @Prop({ type: Types.ObjectId, ref: 'Catalog' })
    catalog: Catalog;
}

export const ProductSchema = SchemaFactory.createForClass(Product)