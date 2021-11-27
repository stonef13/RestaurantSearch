/* eslint-disable max-statements */
/* eslint-disable complexity */

const {restaurants} = require('./funcData')

// const restaurants = [
//   {
//     name: 'Deliciousgenix',
//     customer_rating: 4,
//     distance: 1,
//     price: 10,
//     cuisineId: 11
//   },
//   {
//     name: 'Herbed Delicious',
//     customer_rating: 4,
//     distance: 7,
//     price: 20,
//     cuisineId: 9
//   },
//   {
//     name: 'Deliciousscape',
//     customer_rating: 3,
//     distance: 7,
//     price: 50,
//     cuisineId: 1
//   },
// ]

// console.log('RESTAURANTS', restaurants[0])

function restaurantSearch(name, rating, distance, price, cuisine) {
  const searchResults = []
  //exact match for name
  if (name) {
    if (typeof name !== 'string') {
      console.error('Name is not a String!')
      return
    }
    for (let i = 0; i < restaurants.length; i++) {
      if (name === restaurants[i].name) {
        searchResults.push(restaurants[i])
      }
    }
  }

  if (rating) {
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

  //STILL NEED CUISINES BUT WAIT FOR POSTGRES

  //SORT METHOD TO SORT RESTAURANTS BY DISTANCE

  return searchResults
}

console.log(restaurantSearch(null, null, null, 10, null))

//SORT METHOD TO SORT RESTAURANTS BY DISTANCE
