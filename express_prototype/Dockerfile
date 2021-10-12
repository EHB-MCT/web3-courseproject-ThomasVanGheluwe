#pull node version 14
FROM node:14

#create directory
WORKDIR /usr/app

#copy all package json files to work directory
COPY package*.json ./

#install node modules
RUN npm install

#directory to workdirectory except nodemodules if dockerignore file exist
COPY . .

#open port 3000
EXPOSE 1616

#run start script
CMD [ "npm", "start" ]