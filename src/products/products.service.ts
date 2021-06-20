import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateProductDto } from "./dto/create-products.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
import { ProductCategory } from "./products.category.enum";

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

    async getAllProducts() {
        return await this.productRepository.find();
    }

    async getProductById(id: string) {
        return await this.productRepository.findOne({ id: Number(id) });
    }

    async getProductsByCategory(category: string) {
        return await this.productRepository.find({ where: { category: category } });
    }

    async createProduct(createProductDto: CreateProductDto) {
        return await this.productRepository.save(createProductDto);
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDto) {
        const product = await this.getProductById(id);
        return await this.productRepository.update(product, updateProductDto);
    }

    async removeProduct(id: string) {
        return await this.productRepository.delete(id);
    }
}