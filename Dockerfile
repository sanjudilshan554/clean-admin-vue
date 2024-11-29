# Use a Node.js base image
FROM node:16-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files
COPY . .

# Build the Vue.js application
RUN npm run build

# Serve the app using a lightweight server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
