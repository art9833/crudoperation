const express = require('express');
const router = express.Router();

const crudcontroller = require('../controllers/crud.controller');

router.post('/create', crudcontroller.create);
router.get('/', crudcontroller.read);
router.put('/:id/', crudcontroller.update);
router.delete('/:id/', crudcontroller.delete);
module.exports = router;