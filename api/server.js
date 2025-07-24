import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

const PORT = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, '../dist')

app.use(express.static(DIST_DIR))

app.get('*', (_, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
