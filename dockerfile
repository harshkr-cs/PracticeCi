#base image used for project
FROM node:latest

#set working directory
WORKDIR /app

#copy code from source destination
COPY . .

#install dependencies
RUN npm install

RUN npm install -g nodemon

#expose port 3000
EXPOSE 3000

#start the application
CMD ["npm", "run", "dev"]
#CMD ["npm", "start"]
#CMD ["npm", "index.js"]