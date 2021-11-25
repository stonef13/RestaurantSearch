const Sequelize = require('sequelize')
const db = require('../db')

const Cuisine = db.define('cuisine', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Cuisine
