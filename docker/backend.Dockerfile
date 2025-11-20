FROM node:20-alpine

WORKDIR /app

COPY ../apps/back-end/package*.json ./
RUN npm install

COPY ../apps/back-end .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]
