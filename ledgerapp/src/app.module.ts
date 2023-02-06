import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UserSchema } from 'src/schemas/user.schema';
import { WalletsController } from './wallets/wallets.controller';
import { WalletsModule } from './wallets/wallets.module';
import config from './config/keys'
import { WalletSchema } from './schemas/wallet.schema';
import { WalletsService } from './wallets/wallets.service';
import { CreditController } from './credit/credit.controller';
import { CreditModule } from './credit/credit.module';
import { CreditSchema } from './schemas/credit.schema';
import { CreditService } from './credit/credit.service';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), UsersModule, WalletsModule,MongooseModule.forFeature(
    [
      {name: 'User', schema: UserSchema}, {
      name: 'Wallet', schema: WalletSchema}, 
      {name: 'Credit', schema: CreditSchema}
    ]), WalletsModule, CreditModule],
  controllers: [AppController, UsersController, WalletsController, CreditController],
  providers: [AppService, UsersService, WalletsService, CreditService],
})
export class AppModule { }
