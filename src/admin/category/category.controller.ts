import { Controller, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/CreateCategory.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly CategoryService: CategoryService) { }

    @Post()
    async CreateCategory(@Body() CreateCategoryDto) {
        return this.CategoryService.createCategory(CreateCategoryDto)
    }
}
