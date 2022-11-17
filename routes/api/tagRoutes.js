const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



router.get('/', (req, res) => {});
//find all tags

router.get('/:id', (req, res) => {});
//find tag by id

router.post('/', (req, res) => {});
//create new tag

router.put('/:id', (req, res) => {});
//update tag name by id

router.delete('/:id', (req, res) => {});
//delete tag by id

module.exports = router;
