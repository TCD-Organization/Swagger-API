FROM node:14.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install swagger-tools --save

RUN npm update 1.0-oas3

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
