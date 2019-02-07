FROM node:10-alpine AS base

WORKDIR /app/
COPY yarn.lock .
COPY package.json .
RUN yarn install

################################################################################

FROM base AS development
CMD yarn run start

################################################################################

FROM base AS build

COPY public public
COPY src src
COPY images.d.ts .
COPY tsconfig.json .
COPY tsconfig.prod.json .
COPY tslint.json .
RUN yarn run build

################################################################################

FROM scratch AS static
COPY --from=build /app/build/ /

################################################################################

FROM nginx:alpine AS production
RUN rm -rf /usr/share/nginx/html/
COPY nginx.production.conf /etc/nginx/conf.d/default.conf
COPY --from=static / /usr/share/nginx/html/