import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Product> {
    return this.productRepository.findOne({ where: { id , isDeleted: false } });
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    await this.productRepository.update(id, updateProductDto);
    return this.productRepository.findOne({ where: { id , isDeleted: false } });
  }

  async delete(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }

  async softDelete(id: string): Promise<void> {
    const product = await this.productRepository.findOne({ where: { id ,  isDeleted: false } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    product.isDeleted = true;  
    await this.productRepository.save(product);
  }
}
