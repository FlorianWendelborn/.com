FROM node:12-alpine AS base

WORKDIR /app/
RUN apk --no-cache add git
COPY yarn.lock .
COPY package.json .
COPY packages/frontend/package.json packages/frontend/package.json
RUN yarn install

################################################################################

FROM base AS development
CMD yarn --cwd packages/frontend run start

################################################################################

FROM base AS build

COPY packages/frontend/public packages/frontend/public
COPY packages/frontend/src packages/frontend/src
COPY packages/frontend/tsconfig.json packages/frontend/tsconfig.json

RUN yarn --cwd packages/frontend run build

################################################################################

FROM scratch AS static
COPY --from=build /app/packages/frontend/build/ /

################################################################################

FROM nginx:alpine AS production
RUN rm -rf /usr/share/nginx/html/
COPY packages/frontend/nginx.production.conf /etc/nginx/conf.d/default.conf
COPY --from=static / /usr/share/nginx/html/
