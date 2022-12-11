import { Module } from '@nestjs/common';
import { SharedModule } from 'src/common/shared.module';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

@Module({
  imports: [SharedModule],
  controllers: [SellerController],
  providers: [SellerService]
})
export class SellerModule {}
