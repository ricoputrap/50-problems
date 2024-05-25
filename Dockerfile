FROM imbios/bun-node:18-slim

#FROM oven/bun
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package.json ./
COPY bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the Next.js app for PROD
RUN bun run build

# Start app in development mode
CMD ["bun", "run", "start"]
