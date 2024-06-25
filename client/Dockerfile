FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json yarn.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose port 3000 for the development server
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev"]