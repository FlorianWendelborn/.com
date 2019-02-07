FROM node:10-alpine AS base

WORKDIR /app/
COPY yarn.lock .
COPY package.json .
RUN yarn install

CMD yarn run start