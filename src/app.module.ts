import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { CompaniaModule } from './compania/compania.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ActivofModule } from './activof/activof.module';
import { ActivolModule } from './activol/activol.module';
import { ContratoModule } from './contrato/contrato.module';

@Module({
  imports: [LoginModule, CompaniaModule, UsuarioModule, ActivofModule, ActivolModule, ContratoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
