const router = require('express').Router()
const Restaurant = require('../db/models/restaurant')

router.get('/', async (req, res, next) => {
  try {
    const allRestaurants = await Restaurant.findAll()
    res.json(allRestaurants)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
