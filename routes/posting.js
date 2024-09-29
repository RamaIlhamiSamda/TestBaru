const {Router}= require('express')
const postingRoute = Router()
const {postingController} = require('../controller')
const {authentication} = require('../middlewares/auth')
const {upload} = require('../middlewares/multer')

postingRoute.get('/',postingController.getPosting)
postingRoute.post('/create',postingController.create)


module.exports = postingRoute

// const express = require('express')
// const postingRoute = express.Router()
// const postingController = require('../controller/postingController')

// postingRoute.get('/',postingController.getPosting)

// module.exports = postingRoute