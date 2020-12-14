FROM node:lts
RUN mkdir /sample
COPY . /sample
EXPOSE 3001
CMD cd /sample && npm install && node index.js
