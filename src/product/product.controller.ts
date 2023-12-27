    import {
      Controller,
      Get,
      Post,
      Body,
      Patch,
      Param,
      Delete,
      HttpCode,
      UsePipes,
      ValidationPipe,
    } from '@nestjs/common';
    import { ProductService } from './product.service';
    import { CreateProductDto } from './dto/create-product.dto';
    import { UpdateProductDto } from './dto/update-product.dto';
    
    @Controller('api/product')
    export class ProductController {
      constructor(private readonly productService: ProductService) {}
    
      @Post()
      @HttpCode(201)
      @UsePipes(ValidationPipe)
      async create(@Body() createProductDto: CreateProductDto) {
        return await this.productService.create(createProductDto);
      }
    
      @Get()
      @HttpCode(200)
      findAll() {
        return this.productService.findAll();
      }
    
      @Get(':id')
      @HttpCode(200)
      findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
      }
    
      @Patch(':id')
      @HttpCode(204)
      @UsePipes(ValidationPipe)
      update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(+id, updateProductDto);
      }
    
      @Delete(':id')
      @HttpCode(204)
      remove(@Param('id') id: string) {
        return this.productService.remove(+id);
      }
    }
    