import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ unique: true })
    email: string
    @Column()
    password: string
    @OneToOne(() => Product, { cascade: true })
    @JoinColumn()
    product: Product;
    //
}