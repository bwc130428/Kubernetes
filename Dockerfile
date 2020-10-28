FROM node:12

RUN mkdir /app

WORKDIR /app

COPY index.js .

COPY package.json .

RUN npm install --save



EXPOSE 3000

CMD [ "node", "index.js" ]

