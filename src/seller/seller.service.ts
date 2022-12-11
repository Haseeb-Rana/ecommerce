import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { CreateProductDto } from 'src/common/dto/product/create-product.dto';
import { Product, ProductDocument } from 'src/common/model/product.schema';

@Injectable()
export class SellerService {
    
    constructor() { }
}
