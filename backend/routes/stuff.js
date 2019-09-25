const express = require('express');

const router = express.Router();

const stuffController = require("../controllers/stuff");

const Thing = require('../models/thing');

router.post('/', stuffController.creatThing);

router.get('/', stuffController.getAllThings);

router.get('/:id', stuffController.getOneThing);

router.put('/:id', stuffController.modifyThing);

router.delete('/:id', stuffController.deleteThing);





module.exports = router;