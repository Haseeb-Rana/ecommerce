import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import * as mongoose from 'mongoose';

export type CatalogDocument = Catalog & Document;


@Schema({ timestamps: true })
export class Catalog {

    // @Prop({required:true, unique:true, lowercase:true })
    // name: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    seller: User
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog)