import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { AppConfigService } from '../config/app.config.service';
import { entities } from './entities/entities';

export const SEQUELIZE_TOKEN = 'SEQUELIZE_TOKEN';

export const createSequelizeProvider = (): Provider => ({
  provide: SEQUELIZE_TOKEN,
  useFactory: async (config: AppConfigService): Promise<Sequelize> => {
    const options = config.sequelizeOptions;

    const sequelize: Sequelize = new Sequelize({
      dialect: 'postgres',
      benchmark: true,
      pool: { min: 5, max: 40 },
      dialectOptions: { decimalNumbers: true },
      logging: false,
      ...options,
    });

    sequelize.addModels(entities);
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    return sequelize;
  },
  inject: [AppConfigService],
});
