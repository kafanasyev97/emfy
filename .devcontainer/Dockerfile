FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y git

COPY ../package*.json ./
 
RUN npm install

COPY ../ ./

EXPOSE 5173