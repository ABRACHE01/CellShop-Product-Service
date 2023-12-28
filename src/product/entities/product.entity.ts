import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Brand } from '../../brand/entities/brand.entity';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
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

  @ManyToOne(() => Brand, brand => brand.products)
  brand: Brand;

  @Column({
    comment: 'is deleted',
    type: 'boolean',
    default: false,
  })
  isDeleted: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}