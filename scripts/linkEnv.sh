#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

if [ ! -f "$PROJECT_ROOT/.env" ]; then
	echo "Error: .env file not found in root directory"
	exit 1
fi

if [ -e "$PROJECT_ROOT/backend/prisma/.env" ]; then
	rm -f "$PROJECT_ROOT/backend/prisma/.env"
fi

ln -s "$PROJECT_ROOT/.env" "$PROJECT_ROOT/backend/prisma/.env"

echo "Successfully linked .env file from root to backend/prisma"
