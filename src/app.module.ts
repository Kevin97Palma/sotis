import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { CompaniaModule } from './compania/compania.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ActivofModule } from './activof/activof.module';
import { ActivolModule } from './activol/activol.module';
import { ContratoModule } from './contrato/contrato.module';
import { TokencModule } from './tokenc/tokenc.module';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '186.4.165.234',       // cámbialo por tu host
      port: 7501,
      username: 'saas_user',   // tu usuario de la BD
      password: 'Moodle2026*', // tu password de BD
      database: 'saas_db',
      models: [Usuario],       // aquí agregamos todas las entidades
      autoLoadModels: true,    // crea tablas si no existen
      synchronize: true,       // sincroniza modelos con la BD
      logging: true,
        define: {
    underscored: true, // <--- Esto hace que Sequelize use created_at / updated_at
    timestamps: true,  // activa los timestamps
  },
    }),
    LoginModule,
    CompaniaModule,
    UsuarioModule,
    ActivofModule,
    ActivolModule,
    ContratoModule,
    TokencModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
