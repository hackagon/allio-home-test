# Build stage
FROM node:18-bullseye AS build

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

# Final stage
FROM node:18-bullseye-slim

WORKDIR /app

COPY --from=build /app .
ENV NODE_ENV=production
EXPOSE 5010

CMD ["yarn", "start"]
