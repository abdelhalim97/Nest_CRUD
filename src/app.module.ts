import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity'
import { ProfilesModule } from './profiles/profiles.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TasksModule, ProfilesModule,
    TypeOrmModule.forRoot({
      type: 'mysql', host: 'localhost', port: 3306, username: 'root', password: '',
      database: 'nest-crud', autoLoadEntities: true, synchronize: true, entities: [Task]//synchornize auto update the entities
    }),
    UsersModule,
  ],
})
export class AppModule { }
