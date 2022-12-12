import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import mongoose from "mongoose";
import { CATALOG_STATUS } from "../utils/constants";

export type CatalogDocument = Catalog & Document;


@Schema({ timestamps: true })
export class Catalog {

    @Prop({ required:true, type: String,  index: true })
    name: string;

    @Prop({ required:true, type: String,  index: true })
    description: string;

    @Prop({ index: true, type: String, default: CATALOG_STATUS.ACTIVE, enum: CATALOG_STATUS })
    status: CATALOG_STATUS;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, index: true, unique: true  })
    seller: User
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog)