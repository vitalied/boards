FROM ruby:alpine

RUN apk update && apk add build-base nodejs tzdata libxml2-dev libxslt-dev postgresql-dev

RUN rm -rf /var/cache/apk/*

RUN mkdir -p /app

WORKDIR /app

COPY Gemfile Gemfile.lock /app/

RUN bundle install

EXPOSE 3000

#CMD ['bundle', 'exec', 'rails', 's', '-p', '3000', '-b', '0.0.0.0']
