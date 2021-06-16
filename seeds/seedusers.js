const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'jojopart6',
    email: 'jolynecujoh@greendolphin.com',
    password: '12345'
  },
  {
    username: 'thusspokerohan',
    email: 'kishibe@moriohmanga.com',
    password: '12345'
  },
  {
    username: 'yareyaredaze',
    email: 'jkujo@starfish.com',
    password: 'password1'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;