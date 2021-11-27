const router = require('express').Router()
const Restaurant = require('../db/models/restaurant')
const Cuisine = require('../db/models/cuisine')

router.get('/', async (req, res, next) => {
  try {
    const allRestaurants = await Restaurant.findAll({
      include: [
        {
          model: Cuisine
        }
      ]
    })
    res.json(allRestaurants)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
