FROM node:13-alpine
  
COPY . /app

CMD node /app/app.js

EXPOSE  3000
