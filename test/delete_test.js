const assert = require('assert');
const User = require('../src/user');

describe('Delete a user record in a database', () => {
      let surya;
      beforeEach( (done) => {
                  surya = new User( {name: 'surya'} );
                  surya.save()
                  .then( ()=> done() );
      });

      it('model instance remove ', ( done )=> {
            surya.remove()
            .then( ()=> User.findOne( { name: 'surya'} ))
            .then( (res) => {
                  assert(res === null);
                  done();
            });
      });  

      it('class method remove', ( done ) => {
            User.remove( { name:'surya'} )
            .then( ()=> User.findOne( { name: 'surya' } ) )
            .then( (res)=> {
                  assert( res === null );
                  done();
            });
      });

      it( 'class method findOneAndRemove',  ( done ) => {
            User.findOneAndRemove( {name: 'surya'} )
            .then( ()=> User.findOne( { name:'surya'} ) )
            .then( ( res ) => {
                  assert(res === null);
                  done();
            } );
      } );

      it('class method findByIdAndRemove', (done) => {
            User.findByIdAndRemove( surya._id)
            .then( ()=> User.findOne({name: 'surya'}) )
            .then( (res) => {
                  assert(res === null);
                  done();
            });
      } );
} );