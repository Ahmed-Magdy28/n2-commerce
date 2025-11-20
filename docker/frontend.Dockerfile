FROM node:20-alpine

WORKDIR /app

COPY ../apps/front-end/package*.json ./
RUN npm install

COPY ../apps/front-end .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
