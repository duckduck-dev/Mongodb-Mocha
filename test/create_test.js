const assert = require('assert');
const User = require('../src/user');


describe('Creating records', () => {
      it ( 'saves a user' , ( done ) => {
            const surya = new User( { name : 'surya' } );
            surya.save()
            .then( () => {
                  assert( !surya.isNew );
                  done();
            } );

      } )
} );
