const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist/personal-portfolio/browser directory
app.use(express.static(path.join(__dirname, 'dist/personal-portfolio/browser')));

// Serve the index.csr.html for all requests (Angular's SPA behavior)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/personal-portfolio/browser/index.csr.html'));
});

// Start the server on Heroku's default port or 8080 locally
app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running...');
});
