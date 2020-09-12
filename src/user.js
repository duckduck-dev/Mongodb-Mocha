const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const PostSchema = require('./posts');

const userSchema = new Schema( {
      name : {
            type : String, 
            validate: {
                  validator: (name) => name.length > 2,
                  message: 'Name must be longer than 2 characters.'
            },
            required : [true, 'Name is required' ]
      },
      postCount : Number,
      posts : [PostSchema]
} );


const User = mongoose.model('user', userSchema);


module.exports = User;