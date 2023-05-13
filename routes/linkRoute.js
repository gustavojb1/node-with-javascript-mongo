const express = require('express')
const linkController = require('../controllers/linkController')

const router = express.Router()


router.get('/:tittle', linkController.redirect)

router.post('/', express.urlencoded({extended:true}), linkController.addLink)


router.get('/', (req, res) => res.send('Hello World my collegue'))

module.exports = router