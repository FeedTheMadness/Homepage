FROM node:20.12-alpine as build
LABEL authors="g_Clems<clementsol0110@gmail.com>"

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build /usr/local/app/dist/ftmnet-homepage-old /usr/share/nginx/html

EXPOSE 80
