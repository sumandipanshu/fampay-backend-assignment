from node:lts-slim

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./

RUN npm ci --quiet

COPY . .

EXPOSE 3000

ENV PORT 3000

RUN npm run build

CMD npm start