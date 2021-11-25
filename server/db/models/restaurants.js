const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  customerRating: {
    type: Sequelize.INTEGER
  },
  distance: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  }
})

module.exports = Restaurant
