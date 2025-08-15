#!/bin/bash
# Source environment variables from .env.local file
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
fi

# Check if the token is set
if [ -z "$GITHUB_PERSONAL_ACCESS_TOKEN" ]; then
    echo "Error: GITHUB_PERSONAL_ACCESS_TOKEN is not set"
    echo "Please create a .env.local file with: GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here"
    exit 1
fi

npx @modelcontextprotocol/server-github