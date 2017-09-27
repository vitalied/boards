FROM node:alpine

RUN apk update && apk upgrade

RUN npm install -g @angular/cli tslint typescript

RUN rm -rf /var/cache/apk/*

RUN npm cache clean --force

RUN mkdir -p /app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

EXPOSE 4200

#CMD ['npm', 'start', '--', '--host', '0.0.0.0']
