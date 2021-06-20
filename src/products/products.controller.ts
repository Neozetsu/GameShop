import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { Product } from './products.entity';
import { ProductsService } from './products.service';
import { ProductCategory } from './products.category.enum';

@ApiTags('Продукция')
@Controller('products')
export class ProductsController {
    
    constructor(private readonly productsService: ProductsService) {}

    @Get('all')
    @ApiOperation({ summary: 'Получить всю продукцию' })
    @ApiOkResponse({ description: 'Вся продукция получена', type: [Product] })
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить продукт по id' })
    @ApiParam({ type: 'string', name: 'Product id', example: '57', description: 'Уникальный идентификатор товара' })
    @ApiOkResponse({ description: 'Продукт получен', type: Product })
    getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(id);
    }

    @Get('categories/:category')
    @ApiOperation({ summary: 'Получить всю продукцию по категории' })
    @ApiParam({ type: 'string', name: 'Product category', example: 'keyboards', description: 'Название категории товаров' })
    @ApiOkResponse({ description: 'Вся продукция по категории получена', type: [Product] })
    getProductByCategory(@Param('category') category: string) {
        this.productsService.getProductsByCategory(category);
    }

    @Post('create')
    @ApiOperation({ summary: 'Создать новый продукт' })
    @ApiBody({ description: 'Данные о новом продукте', type: CreateProductDto })
    @ApiCreatedResponse({ description: 'Продукт создан', type: Product })
    createProduct(@Body() createProductDto: CreateProductDto) {
        this.productsService.createProduct(createProductDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удалить существующий продукт по id' })
    @ApiParam({ type: 'string', name: 'Product id', example: '42', description: 'Уникальный идентификатор товара' })
    @ApiOkResponse({ description: 'Продукт удалён', type: Product })
    removeProduct(@Param() id: string) {
        this.productsService.removeProduct(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Обновить существующий продукт' })
    @ApiParam({ type: 'string', name: 'Product id', example: '37', description: 'Уникальный идентификатор товара' })
    @ApiBody({ description: 'Изменённые данные о товаре', type: UpdateProductDto })
    @ApiOkResponse({ description: 'Продукт обновлён', type: Product })
    updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        this.productsService.updateProduct(id, updateProductDto);
    }
}
