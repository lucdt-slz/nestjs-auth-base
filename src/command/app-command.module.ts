import { Module } from '@nestjs/common';
import { CryptoKeyCommand } from './crypto-key.command';
import { CommandModule } from 'nestjs-command';

@Module({ imports: [CommandModule], providers: [CryptoKeyCommand] })
export class AppCommandModule {}
