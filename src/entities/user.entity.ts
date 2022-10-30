import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ unique: true })
    email: string
    @Column()
    password: string
    @OneToOne(() => Profile, { cascade: true })
    @JoinColumn()
    profile: Profile;
    //
}