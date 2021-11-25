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
    for (let i = 0; i < restaurants.length; i++) {
      if (name === restaurants[i].name) {
        searchResults.push(restaurants[i])
      }
    }
  }

  if (rating) {
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

  return searchResults
}

console.log(restaurantSearch('Herbed Delicious', 5, null, null, null))

//DATA
