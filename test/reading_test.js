const assert = require('assert');
const User = require('../src/user');

describe( 'Reading users out of database', () => {
      let surya;

      beforeEach( (done)=> {
            surya = new User( { name: 'surya' } );
            surya.save()
                  .then( () => done() );
      });

      it( 'find all users with name of surya' , (done) => {
            User.find( {name: 'surya'} )
                  .then(  (users) => {
                        assert(users[0]._id.toString() === surya._id.toString() );
                        done();
                  } );
      } );

      it('find a user with particular id', (done) => {
            User.findOne( {_id: surya._id} )
                  .then( (user) => {
                              assert(user.name === 'surya');
                              done();
                  });
      } );

} );
