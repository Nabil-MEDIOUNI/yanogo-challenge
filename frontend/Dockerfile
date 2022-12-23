# base image
FROM node:latest

# set working directory
RUN mkdir /app
WORKDIR /app

# install dependencies
COPY package.json /app
RUN npm install

# copy files
COPY . /app

#expose the app
EXPOSE 80

# start app
CMD ["npm", "run", "start"]
