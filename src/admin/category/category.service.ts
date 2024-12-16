import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/CreateCategory.dto';
import { Category } from './schemas/Category.Schema';

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private readonly categoryModel: Model<Category>) { }

    createCategory(CreateCategoryDto: CreateCategoryDto) {
        const createdCategory = this.categoryModel.create(CreateCategoryDto)
        return createdCategory;
    }
}
