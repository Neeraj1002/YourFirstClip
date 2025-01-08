FROM node:20-alpine

WORKDIR /var/www/app

# may be we don't need this if we somehow can serve this directly from lsws
RUN npm install -g serve

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# build the project
RUN npm run build

EXPOSE 3004

CMD ["serve", "-s", "build"]
