
const { Post } = require('../models');

const postdata = [
  {
    title: 'asdfasd',
    post_text: 'asdf as',
    user_id: 10
  },
  {
    title: 'Keeep',
    post_text: 'Posters post post',
    user_id: 8
  },
  {
    title: 'Toasters Toast Toast',
    post_text: 'Marios Hotel',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;