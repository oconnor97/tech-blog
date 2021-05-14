const User = require('./user');
const Blog = require('./blog')
const Comment = require('./comment')



User.hasMany(Blog, {
    foreignKey: user_id,
});

Blog.belongsTo(User, {
    foreignKey: user_id,
})



module.exports = { User, Blog }