const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const path = require("path")
const { router: routes } = require("./src/API/routes.js")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static("public"))

app.use("/api", routes)

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"))
})
app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})
