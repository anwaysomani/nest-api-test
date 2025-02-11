import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './cats.schema';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

    async create(createCatDto: any): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
}
