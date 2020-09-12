const assert = require('assert');
const User = require('../src/user');
const { findOne } = require('../src/user');


describe('SubDocument test', () => {

      it('subDocument', ( done ) => {
            const surya = new User( { name : 'surya', posts : [ { title : '5 steps to become a js developer' } ] } );
            surya.save()
            .then( ()=> User.findOne( { name : 'surya' } ) )
            .then( (user) => {
                  assert( user.posts[0].title === '5 steps to become a js developer' );
                  done();
            } );
      } );

      it('pushing Subdocuments to posts', ( done ) => {
            const user = new User( { name : 'surya' , posts : [] } );
            user.save()
            .then( () => User.findOne( { name : 'surya' } ) )
            .then( (user) => {
                  user.posts.push( { title : 'my new post' } );
                  return user.save(); } )
            .then( () => User.findOne( { name : 'surya' } ) )
            .then( (users) => {
               //   console.log(users);
                  assert( users.posts[0].title === 'my new post' );
            } )
            .then( () => User.findOne( { name : 'surya' } ) )
            .then( (users) => {
                  users.posts.push( { title : 'second post' } ); 
                  return users.save();  } )
            .then(  () => User.findOne( { name : 'surya' } ) )
            .then( (user) => {
                  console.log(user);
                  done();
            } );
      } );
} );