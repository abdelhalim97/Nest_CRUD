import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity({ name: 'profiles' })
export class Profile {
    @PrimaryColumn('uuid')
    id: string
    @Column()
    age: number
}