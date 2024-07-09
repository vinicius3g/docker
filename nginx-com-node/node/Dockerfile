FROM node:21-slim

WORKDIR /app

COPY package*.json ./

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]



# FROM nginx:latest

# # WORKDIR /app

# # RUN apt-get update && \ 
# #   apt-get install vim -y

# # COPY html/ /usr/share/nginx

# ENTRYPOINT ["echo", "hello"]
# CMD ["world"]