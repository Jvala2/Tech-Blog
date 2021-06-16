const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Did you all see about the floating pool in Scotland',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Sir this is a tech blog.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Guys my computer broke when I stabbed it with a katana, how else am I supposed to post my sword art online?',
    user_id: 3,
    post_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;