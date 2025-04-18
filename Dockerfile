FROM node:20-alpine

WORKDIR /usr/src/aoo

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]