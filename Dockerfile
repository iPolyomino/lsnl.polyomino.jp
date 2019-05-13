FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD ["yarn", "start", "-p", "8080"]
