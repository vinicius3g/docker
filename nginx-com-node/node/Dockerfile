FROM node:21-slim

WORKDIR /app

COPY package*.json ./

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