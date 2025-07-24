// server.js
const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, 'dist')

// Serve les fichiers statiques (JS, CSS, etc.)
app.use(express.static(DIST_DIR))

// Toutes les autres routes redirigent vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})
