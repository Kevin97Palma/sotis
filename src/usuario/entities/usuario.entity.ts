import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,          // habilita timestamps
  createdAt: 'created_at',   // columna real en la base
  updatedAt: 'updated_at',   // columna real en la base, si no existe puedes crearla o Sequelize fallará
})
export class Usuario extends Model<Usuario> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1, // compañía fija
  })
  declare company_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: 'user',
  })
  declare role: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare created_at: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: () => new Date(), // Si quieres un valor por defecto
  })
  declare updated_at: Date;
}
