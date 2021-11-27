/* eslint-disable max-statements */
/* eslint-disable complexity */

const restaurants = require('./funcData')

function restaurantSearch(name, rating, distance, price, cuisine) {
  let searchResults = []
  //exact match for name
  if (name) {
    if (typeof name !== 'string') {
      console.error('Name is not a String!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].name.includes(name)) {
        if (searchResults.includes(restaurants[i])) {
          continue
        } else {
          searchResults.push(restaurants[i])
        }
      }
    }
  }

  if (rating && !name) {
    if (typeof rating !== 'number') {
      console.error('rating is not an Integer!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].customer_rating >= rating) {
        if (searchResults.includes(restaurants[i])) {
          continue
        } else {
          searchResults.push(restaurants[i])
        }
      }
    }
  }

  if (distance && !name) {
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

  if (price && !name) {
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

  if (cuisine && !name) {
    if (typeof cuisine !== 'string') {
      console.error('Name is not a String!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].cuisine.name.includes(cuisine)) {
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

  //STILL NEED CUISINES BUT WAIT FOR POSTGRES

  //SORT METHOD TO SORT RESTAURANTS BY DISTANCE
  console.log('SEARCH RESULTS AFTER SORT', searchResults)
  // return searchResults
}

// PARAMS: (name, rating, distance, price, cuisine)

console.log(restaurantSearch('St', null, 3, null, null))

//SORT METHOD TO SORT RESTAURANTS BY DISTANCE

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

module.exports = restaurantSearch
