const express = require('express');

const router = express.Router();

const stuffController = require("../controllers/stuff");

const Thing = require('../models/thing');

const auth  =  require("../middleware/auth");

const multer = require("../middleware/multer-config");

router.post('/',  auth , multer, stuffController.creatThing);

router.get('/',  auth , stuffController.getAllThings);

router.get('/:id',  auth , stuffController.getOneThing);

router.put('/:id', auth ,  stuffController.modifyThing);

router.delete('/:id', auth ,  stuffController.deleteThing);





module.exports = router;