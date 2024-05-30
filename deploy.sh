#!/bin/bash

# Step 1: Pull the latest changes from Git
echo "Pulling latest changes from Git..."
git pull origin main

# Check if the git pull was successful
if [ $? -ne 0 ]; then
  echo "Git pull failed. Exiting..."
  exit 1
fi

# Step 2: Rebuild and restart Docker Compose services
echo "Rebuilding and restarting Docker Compose services..."
docker compose up --build -d

# Check if Docker Compose commands were successful
if [ $? -ne 0 ]; then
  echo "Docker Compose commands failed. Exiting..."
  exit 1
fi

echo "Deployment completed successfully!"
