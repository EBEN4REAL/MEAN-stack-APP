const express = require('express');

const router = express.Router();

const stuffController = require("../controllers/stuff");

const Thing = require('../models/thing');

const auth  =  require("../middleware/auth");

router.post('/',  auth , stuffController.creatThing);

router.get('/' , stuffController.getAllThings);

router.get('/:id',  auth , stuffController.getOneThing);

router.put('/:id',  stuffController.modifyThing);

router.delete('/:id', auth ,  stuffController.deleteThing);





module.exports = router;