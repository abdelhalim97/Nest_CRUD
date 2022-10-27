import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity'
@Module({
  imports: [TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql', host: 'localhost', port: 3306, username: 'root', password: '',
      database: 'nest-crud', autoLoadEntities: true, synchronize: true, entities: [Task]//synchornize auto update the entities
    })],
})
export class AppModule { }
