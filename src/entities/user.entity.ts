import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { Task } from "./task.entity";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ unique: true })
    email: string
    @Column()
    password: string
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
}