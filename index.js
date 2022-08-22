const express = require("express")
const mongoose = require("mongoose")
const primeNumberRoute = require("./routes/primeNumberRoute")

const port = 9000

const app = express()

const URL = "mongodb://localhost/PrimeNUmberDB"
mongoose.connect(URL, { useNewUrlParser: true })

const con = mongoose.connection

con.on("open", () => {
  console.log("DB connected...")
})

app.use(express.json())

app.use("/prime", primeNumberRoute)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})