import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SharedModule } from 'src/common/shared.module';
import { JWT_SECRET } from 'src/common/utils/constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.auth';


@Module({
  imports: [PassportModule,SharedModule, JwtModule.register({
    secret: JWT_SECRET,
    signOptions: { expiresIn: '1d' },
  })],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
