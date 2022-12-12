/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from '../dto/order/order.dto';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { Order, OrderDocument } from '../model/order.schema.';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async findAll(query: any) {
        return this.orderModel.find(query).sort({ createdAt: -1 }).lean()
    }

    async addOrder(order: OrderDto[]) {
        if(Array.isArray(order)) {
            return this.orderModel.insertMany(order);
        } else {
            return new this.orderModel(order).save()
        }
    }
}
