const sequelize = require('../config/connection');


const seedUsers = require('./seedusers');
const seedComments = require('./seedcomment');
const seedPosts = require('./seedposts');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();






  process.exit(0);
};

seedDatabase();
