FROM node:16-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm i --force

# Bundle app source
COPY . .
RUN npm run lint

# Run the app on container startup.
EXPOSE 3000
ENTRYPOINT [ "npm", "run" , "dev" ]