const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    name: 'jojopart6',
    email: 'jolynecujoh@greendolphin.com',
    password: '12345'
  },
  {
    name: 'thusspokerohan',
    email: 'kishibe@moriohmanga.com',
    password: '12345'
  },
  {
    name: 'yareyaredaze',
    email: 'jkujo@starfish.com',
    password: 'password1'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;