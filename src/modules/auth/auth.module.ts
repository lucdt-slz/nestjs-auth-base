import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetProfileController } from './controllers/get-profile.controller';
import { LoginController } from './controllers/login.controller';
import { JwtStrategy } from './strategys/jwt.strategy';
import { UserModule } from '@modules/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService, JwtStrategy],
  controllers: [GetProfileController, LoginController],
})
export class AuthModule {}
