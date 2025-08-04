import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for local development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve MCP files
app.get('/mcp/:name', async (req, res) => {
  try {
    const fileName = `${req.params.name}.json`;
    const filePath = path.join(__dirname, 'mcp_servers', fileName);
    
    const fileContent = await fs.readFile(filePath, 'utf-8');
    res.json(JSON.parse(fileContent));
  } catch (error) {
    res.status(404).json({ error: 'MCP server not found' });
  }
});

// List available MCP servers
app.get('/mcp', async (req, res) => {
  try {
    const files = await fs.readdir(path.join(__dirname, 'mcp_servers'));
    const mcpServers = files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
    
    res.json({ 
      servers: mcpServers,
      usage: 'GET /mcp/:name to fetch specific MCP server'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to list MCP servers' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`MCP Server running at http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /mcp - List all available MCP servers`);
  console.log(`  GET /mcp/:name - Get specific MCP server (e.g., /mcp/reactcomponents)`);
});