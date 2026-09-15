const express = require('express');
const path = require('path');

const app = express();
const port = Number(process.env.PORT) || 8080;
const buildPath = path.join(__dirname, 'build');

app.disable('x-powered-by');

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use(express.static(buildPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});
