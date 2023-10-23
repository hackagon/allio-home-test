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

RUN yarn mikro-orm migration:up

RUN printf "#!/bin/sh \n\
  npx dotenv mikro-orm migration:up \n\
  yarn start \n\
  " > /usr/src/app/run.sh
RUN chmod +x /usr/src/app/run.sh

CMD [ "/usr/src/app/run.sh" ]