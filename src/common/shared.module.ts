/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Catalog, CatalogSchema } from './model/catalog.schema';
import { Order, OrderSchema } from './model/order.schema.';
import { Product, ProductSchema } from './model/product.schema';
import { User, UserSchema } from './model/user.schema';
import { CatalogService } from './service/catallog.service';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Product.name, schema: ProductSchema }, { name: Catalog.name, schema: CatalogSchema }, { name: Order.name, schema: OrderSchema }]),],
    controllers: [],
    providers: [CatalogService, ProductService, UserService, OrderService],
    exports: [CatalogService, ProductService, UserService , OrderService],
})
export class SharedModule {}
