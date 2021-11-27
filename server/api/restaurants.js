const router = require('express').Router()
const Restaurant = require('../db/models/restaurant')
const Cuisine = require('../db/models/cuisine')
// const restaurantSearch = require('../../func')

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
    next(err)
  }
})

router.get(
  '/:name/:rating/:distance/:price/:cuisine',
  async (req, res, next) => {
    console.log('PARAMS', req.params.name)
    try {
      const name = req.params.name
      const rating = req.params.rating
      const distance = req.params.distance
      const price = req.params.prics
      const cuisine = req.params.cuisine

      const allRestaurants = await Restaurant.findAll({
        include: [
          {
            model: Cuisine
          }
        ]
      })

      const filteredRestaurants = restaurantSearch(
        name,
        rating,
        distance,
        price,
        cuisine,
        allRestaurants
      )

      console.log('FILTERED RESTAURANTS')

      res.json(allRestaurants)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
