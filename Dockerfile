FROM node:latest

WORKDIR /client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]

EXPOSE 3000