const assert = require('assert');
const User = require('../src/user');

describe( 'Validation records', () => {
      it( 'requires a user name', ( )=> {
                  const user = new User( { name: undefined } );
                  const validationResult = user.validateSync();
                  // console.log( validationResult );
                  const {message } = validationResult.errors.name;
                  assert (message === 'Name is required');
                 // console.log(message)
      } );

      it( 'requires a user\'s name longer than 2 characters', () => {
                  const user = new User( { name : 'EL'} );
                  const validationResult = user.validateSync();
                  const { message } = validationResult.errors.name;
                  assert( message === 'Name must be longer than 2 characters.' );
      } );


      it( 'disallows Invalid records from being saved' , () => {
            const user = new User( { name : 'el' } );
            user.save()
            .catch( (validationResult) => {
                  const { message } = validationResult.errors.name;
                  assert( message === 'Name must be longer than 2 characters.' );
            } );
      } );

} );