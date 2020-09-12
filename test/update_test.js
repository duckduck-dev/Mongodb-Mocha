/*const assert = require('assert');
const User = require('../src/user');

const assertName = (operation, done) => {
      operation
      .then( () => User.find( {} ) )
      .then( res => {
            assert( res.length === 1 );
            assert( res[0].name === 'soundarSurya' );
            done();
      });
}

describe('update users', () => {
      let surya;
      beforeEach( (done) => { 
            surya = new User( {name: 'surya', postCount: 0 } )
            surya .save()
                  .then( ()=> done() );
      });

      it('update model instance using set and save', ( done ) => {
            surya.set( 'name', 'soundarSurya' )
            assertName( surya.save(), done );
      });

      it('using update method for model instance', ( done ) =>{
            assertName( surya.update( { name:'soundarSurya' } ), done)
      } );

      it('update using class method ', ( done ) => {
            assertName(
                  User.update( {name : 'surya' }, {name : 'soundarSurya'} ),
                  done
            );
      } );

      it('update using findOneAndUpdate', ( done ) => {
            assertName(
                  User.findOneAndUpdate( { name: 'surya'}, { name : 'soundarSurya' } ),
                  done
                  );
      } );

      it('update using findByIdAndUpdate', ( done ) => {
            assertName(
                  User.findByIdAndUpdate( surya._id , { name : 'soundarSurya' } ),
                  done
                  );
      } );

      it('increment postCount by 1', ( done ) => {
            User.update( { name:'surya' }, { $inc : { postCount : 1 } } )
            .then( ()=> User.findOne( { name:'surya' } ) )
            .then( user => {
                  assert( user.postCount === 1 );
                  done();
            } );
      } );



} );
*/