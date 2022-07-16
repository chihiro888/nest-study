import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './configuration/configuration';

// for debug
console.log('----------------------------')
console.log(`.env.${process.env.NODE_ENV}`)
console.log('----------------------------')

@Module({
  imports: [
    // setting configuration
    ConfigModule.forRoot({
      envFilePath: `./src/configuration/.env.${process.env.NODE_ENV}`,
      load: [configuration]
    }),

    // setting TypeOrm
    TypeOrmModule.forRootAsync({
      name: 'study',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database')
      })
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
