/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { Product, ProductDocument } from '../model/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async addProduct(products: CreateProductDto | CreateProductDto[]) {
        if(Array.isArray(products)) {
            return this.productModel.insertMany(products);
        } else {
            return new this.productModel(products).save()
        }
    }
    async findAll(query: Object = {}) {
        return this.productModel.find(query);
    }

    async findOne(query: Object) {
        return this.productModel.findOne(query);

    }

    async count(query: Object) {
        return this.productModel.countDocuments(query);

    }
}
