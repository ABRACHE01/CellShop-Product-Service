import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

}
