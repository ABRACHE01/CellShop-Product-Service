import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'the product unique identifier',
  })
  id: number;

  @Column({
    comment: 'the product name',
    type: 'varchar',
  })
  name: string;

  @Column({
    comment: 'the product price',
    type: 'decimal',
  })
  price: number;

  @Column({
    comment: 'the product description',
    nullable: true,
    type: 'text',
  })
  description: string;

  @Column({
    comment: 'the product image',
    type: 'varchar',
    nullable: true,
  })
  image: string;

  @Column({
    comment: 'the product brand',
    type: 'varchar',
    nullable: true,
  })
  brand: string;

  @Column({
    comment: 'is deleted ',
    type: 'boolean',
    default: false,
  })
  isDeleted: boolean;


  createdAt: Date;
  updatedAt: Date;
}
