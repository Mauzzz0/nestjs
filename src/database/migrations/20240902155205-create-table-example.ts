import { QueryInterface, Sequelize, Transaction } from 'sequelize';
import { DataType } from 'sequelize-typescript';

import { Columns, Tables } from '../utils/enums';
import { wrapWithTransaction } from '../utils/migrations.wrapper';

module.exports = {
  up: wrapWithTransaction(
    async (
      transaction: Transaction,
      queryInterface: QueryInterface,
      sequelize: Sequelize,
    ): Promise<void> => {
      await queryInterface.createTable(
        Tables.examples,
        {
          [Columns.id]: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          },
          [Columns.createdAt]: {
            allowNull: false,
            defaultValue: DataType.NOW,
            type: DataType.DATE,
          },
          [Columns.updatedAt]: {
            allowNull: false,
            defaultValue: DataType.NOW,
            type: DataType.DATE,
          },
          [Columns.example]: {
            type: DataType.STRING,
            allowNull: true,
          },
        },
        { transaction },
      );
    },
  ),

  down: wrapWithTransaction(
    async (
      transaction: Transaction,
      queryInterface: QueryInterface,
      sequelize: Sequelize,
    ): Promise<void> => {
      await queryInterface.dropTable(Tables.examples, { transaction });
    },
  ),
};
