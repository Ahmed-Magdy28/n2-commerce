#!/usr/bin/env bash

# Make sure Docker daemon is running
if ! systemctl is-active --quiet docker; then
    echo "Starting Docker service..."
    sudo systemctl start docker
fi

# Navigate to infra folder
cd "$(dirname "$0")/infra" || exit


# Start containers in detached mode
docker-compose up -d --build