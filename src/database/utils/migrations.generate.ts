import dayjs from 'dayjs';
import fs from 'fs';
import path from 'path';

const name = process.argv[2];
if (!name) {
  throw new Error('You should specify name for new migration');
}

const ts: string = dayjs().format('YYYYMMDDHHmmss');
const src: string = path.resolve(__dirname, 'template');
const dst: string = path.resolve(__dirname, '../migrations', `${ts}-${name}.ts`);
fs.copyFileSync(src, dst);
