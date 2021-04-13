FROM node:14.16.0-alpine3.10 as build-step
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

FROM node:14.16.0-alpine3.10
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN rm -rf frontend
RUN npm run build
COPY --from=build-step /app/out dist/frontend/out
ENV TZ=Africa/Lagos
ENV PORT=$PORT
ENV MYSQL_PASSWORD=$MYSQL_PASSWORD
ENV MYSQL_USERNAME=$MYSQL_USERNAME
ENV MYSQL_HOST=$MYSQL_HOST
ENV MYSQL_DATABASE=$MYSQL_DATABASE
ENTRYPOINT ["npm","start"]