#!/bin/bash

if [ -f mcp-server.pid ]; then
    PID=$(cat mcp-server.pid)
    echo "Stopping MCP server (PID: $PID)..."
    kill $PID
    rm mcp-server.pid
    echo "MCP server stopped."
else
    echo "No MCP server PID file found. Server might not be running."
fi