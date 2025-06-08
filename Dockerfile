# Use official Node.js 18 base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

