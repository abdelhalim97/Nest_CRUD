import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { TaskStatus } from './task.model'
@Entity({ name: 'tasks' })
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ unique: true })
    title: string;
    @Column({ nullable: true })
    description: string;
    @Column({ default: 'OPEN' })
    status: TaskStatus;
    @Column()
    createdAt: Date
}