import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { Tables } from '../utils/enums';

@Table({ timestamps: true, tableName: Tables.examples })
export class ExampleEntity extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  public id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  public example: string | null;
}
