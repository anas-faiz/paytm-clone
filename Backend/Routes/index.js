const express = require('express')
const UserRouter = require('./User')

const Router = express.Router()


Router.get("/user", UserRouter)

module.exports = Router
