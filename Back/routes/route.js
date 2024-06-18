const {Router} = require('express')
const router = Router()
const {connexion,inscription} = require('../controllers/control')


router.post("/inscription", inscription)











module.exports = router