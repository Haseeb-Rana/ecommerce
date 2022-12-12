import { Module } from '@nestjs/common';
import { SharedModule } from 'src/common/shared.module';
import { BuyerController } from './buyer.controller';
import { BuyerService } from './buyer.service';

@Module({
  imports: [SharedModule],
  controllers: [BuyerController],
  providers: [BuyerService]
})
export class BuyerModule {}
