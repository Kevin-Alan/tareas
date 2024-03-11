import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { TareaResolver } from './tarea.resolver';

@Module({
  controllers: [TareaController],
  providers: [TareaService, TareaResolver]
})
export class TareaModule {}

export { TareaController };
