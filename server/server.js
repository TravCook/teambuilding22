const express = require('express')
const db = require('./config/connection')
const path = require('path')
const routes = require('./routes');
require('dotenv').config()
// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;
// Set up body parsing, static, and route middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/remoteEntry.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/remoteEntry.js'));
  });
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
app.use(routes);
// Start the server on the port
db.once('open', () => {
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
})
