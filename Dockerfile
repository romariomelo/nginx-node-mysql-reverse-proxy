FROM node:20

WORKDIR /node

COPY . .

RUN npm ci

ENTRYPOINT [ "node", "src/index.js" ]