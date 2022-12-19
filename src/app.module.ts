import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity'
import { ProdutsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [TasksModule, ProdutsModule, ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql', host: process.env.AZURE_HOST, port: Number(process.env.PORT), username: process.env.AZURE_USERNAME,
      password: process.env.AZURE_PASS, database: process.env.AZURE_DB,
      autoLoadEntities: true, synchronize: true, entities: [Task]//synchornize auto update the entities
    }),
    UsersModule,
  ],
})
export class AppModule { }
