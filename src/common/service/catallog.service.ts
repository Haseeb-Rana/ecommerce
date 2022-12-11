/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Catalog, CatalogDocument } from '../model/catalog.schema';

@Injectable()
export class CatalogService {
    constructor(@InjectModel(Catalog.name) private catalogModel: Model<CatalogDocument>,) { }

    async findOne(query : any) {
        return this.catalogModel.findOne(query).lean();
    }

    async getCataogId(query: any) {
        return this.catalogModel.distinct('_id', query);
    }

    
}
