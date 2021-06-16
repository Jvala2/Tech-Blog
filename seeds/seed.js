const sequelize = require('../config/connection');

const seedComments = require('./seedcomment');
// const seedPosts = require('./seedposts');
const seedUsers = require('./seedusers');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedComments();

 // await seedPosts();

  await seedUsers();


  process.exit(0);
};

seedDatabase();
