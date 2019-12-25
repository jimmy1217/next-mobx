FROM mhart/alpine-node:8

RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY ./package.json ./yarn.lock /var/www/app/

RUN yarn install --silent

COPY . /var/www/app
COPY env/.env /var/www/app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
