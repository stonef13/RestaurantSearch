/* eslint-disable max-statements */
/* eslint-disable complexity */

const restaurants = require('./funcData')

function restaurantSearch(name, rating, distance, price, cuisine) {
  let searchResults = []
  if (name) {
    if (typeof name !== 'string') {
      console.error('Name is not a String!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].name.toLowerCase().includes(name.toLowerCase())) {
        if (searchResults.includes(restaurants[i])) {
          continue
        } else {
          searchResults.push(restaurants[i])
        }
      }
    }
  }

  if (rating) {
    if (typeof rating !== 'number') {
      console.error('rating is not an Integer!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].customerRating >= rating) {
        if (searchResults.includes(restaurants[i])) {
          continue
        } else {
          searchResults.push(restaurants[i])
        }
      }
    }
  }

  if (distance) {
    if (typeof distance !== 'number') {
      console.error('distance is not an Integer!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].distance <= distance) {
        if (searchResults.includes(restaurants[i])) {
          continue
        } else {
          searchResults.push(restaurants[i])
        }
      }
    }
  }

  if (price) {
    if (typeof price !== 'number') {
      console.error('Price is not an Integer!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].price <= price) {
        if (searchResults.includes(restaurants[i])) {
          continue
        } else {
          searchResults.push(restaurants[i])
        }
      }
    }
  }

  if (cuisine) {
    if (typeof cuisine !== 'string') {
      console.error('Name is not a String!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (
        restaurants[i].cuisine.name
          .toLowerCase()
          .includes(cuisine.toLowerCase())
      ) {
        if (searchResults.includes(restaurants[i])) {
          continue
        } else {
          searchResults.push(restaurants[i])
        }
      }
    }
  }
  if (searchResults.length > 1) {
    searchResults = sortRestaurants(searchResults)
  }

  return searchResults
}

function sortRestaurants(arrayOfRestaurants) {
  arrayOfRestaurants.sort((a, b) => a.distance - b.distance)

  arrayOfRestaurants = arrayOfRestaurants.slice(0, 5)

  if (
    arrayOfRestaurants[0].distance === arrayOfRestaurants[1].distance &&
    arrayOfRestaurants[0].customerRating < arrayOfRestaurants[1].customerRating
  ) {
    let temp = arrayOfRestaurants[0]
    arrayOfRestaurants[0] = arrayOfRestaurants[1]
    arrayOfRestaurants[1] = temp
  }

  if (
    arrayOfRestaurants[0].customerRating ===
      arrayOfRestaurants[1].customerRating &&
    arrayOfRestaurants[0].price > arrayOfRestaurants[1].price
  ) {
    let temp = arrayOfRestaurants[0]
    arrayOfRestaurants[0] = arrayOfRestaurants[1]
    arrayOfRestaurants[1] = temp
  }

  return arrayOfRestaurants
}

// restaurauntSearch(name, rating, distance, price, cuisine)
console.log(restaurantSearch(null, null, null, null, null))

module.exports = restaurantSearch
