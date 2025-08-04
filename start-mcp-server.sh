#!/bin/bash

# Start MCP server in background
echo "Starting MCP server..."
node mcp-server.js &

# Save the process ID
echo $! > mcp-server.pid

echo "MCP server started with PID: $(cat mcp-server.pid)"
echo "Server running at http://localhost:3000"
echo ""
echo "To stop the server, run: ./stop-mcp-server.sh"