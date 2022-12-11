import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Catalog } from "./catalog.schema";

export type ProductDocument = Product & Document;


@Schema({ timestamps: true })
export class Product {

    @Prop({required:true, lowercase:true })
    name: string;

    @Prop({required:true })
    price: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Catalog' })
    catalog: Catalog;
}

export const ProductSchema = SchemaFactory.createForClass(Product)