const express = require('express')
const linkController = require('../controllers/linkController')

const router = express.Router()


router.get('/:tittle', linkController.redirect)

router.get('/', (req, res) => res.render('index'))

router.post('/', express.urlencoded({extended:true}), linkController.addLink)

module.exports = router