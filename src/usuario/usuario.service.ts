import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const data: Partial<Usuario> = { ...dto, company_id: 1 };
    return this.usuarioModel.create(data as any);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.findAll();
  }

  async findOne(id: number): Promise<Usuario> {
    const user = await this.usuarioModel.findByPk(id);
    if (!user) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    return user;
  }

  async update(id: number, dto: UpdateUsuarioDto): Promise<Usuario> {
    const user = await this.findOne(id);
    return user.update(dto as any);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async login(email: string, password: string) {
    const user = await this.usuarioModel.findOne({ where: { email } });
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return { message: 'Login exitoso', user };
  }
}
