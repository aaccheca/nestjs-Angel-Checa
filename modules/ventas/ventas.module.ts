import { Global, Module } from '@nestjs/common';
import { ventasProviders } from '@ventas/providers';
import { DatabaseModule } from '@Database';

@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...ventasProviders],
  exports: [...ventasProviders],
})
export class VentasModule {}
