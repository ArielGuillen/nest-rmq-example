FROM node:18 AS base
RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build:all
RUN pnpm prune --prod

FROM gcr.io/distroless/nodejs18-debian11 as pre-production
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist/apps .
EXPOSE 4000

FROM pre-production as production
ARG APP
ENV WORKDIR=/app/${APP}
WORKDIR ${WORKDIR}
CMD ["main.js"]

