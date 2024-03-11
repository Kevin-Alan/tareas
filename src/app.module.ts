import { Module } from '@nestjs/common';
import { TareaModule } from './tarea/tarea.module';
import { TareaController } from './tarea/tarea.controller';

@Module({
  imports: [TareaModule],
  controllers: [TareaController],
})
export class AppModule {}
