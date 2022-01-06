const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem, addItem } = require('../controlles/task')

router.get( '/',getItems)

router.get('/:id', getItem)

router.post('/', createItem)

router.post('/:id', addItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router