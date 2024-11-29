const express = require('express')
const mainRouter = require("./Routes/index")
const app = express()

const cors = require('cors')

app.use(bodyparser.json());

app.use (cors())

app.use("/api/v1", mainRouter)

app.listen(3000);