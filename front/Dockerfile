FROM node:16

# pasta para aonde vai o build
WORKDIR /app

COPY . .
RUN npm i
RUN npm run build

ENV REACT_APP_API_BASE_URL=http://localhost:4001

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app