'use strict';
let should = require('should');
let controller = require('../../api/bookController').controller;

describe('bookController', () => {
  // getAll() test: data and error
  describe('getAll()', () => {
      it('Should return an Array with a length of 3', (done) => {
        let req = {};
        let res = {
          json: function(data) {
            data.should.be.an.instanceOf(Array);
            data.length.should.equal(3);
            done();
          }
        };
        let next = function() {
          throw new Error('Called next when it shant have!');
        };
        let book = {
          find: function() {
            return {
              exec: function(cb) {
                cb(null, [1, 2, 3]);
              }
            }
          }
        };
        controller(book).getAll(req, res, next);
      });
      it("Should return next function with custom error", (done) => {
        let book = {
          find: function() {
            return {
              exec: function(cb) {
                cb('This is a custom error from the next function!')
              }
            }
          }
        }
        let req = {}
        let res = {
          json: function() {
            throw new Error('Called res.json when it shant have!');
          }
        }
        let next = function(err) {
          err.should.equal('This is a custom error from the next function!');
          done();
        }
        controller(book).getAll(req, res, next);
      })
    })
    // getOne() test: working and error
  describe('getOne', (done) => {
      it('Should return an object by specific id', (done) => {
        let book = {
          find: function(data) {
            data._id.should.equal(3);
            return {
              exec: function(cb) {
                cb(null, 'Hey, I am here!');

              }
            }
          }
        }
        let req = {
          params: {
            id: 3
          }
        }
        let res = {
          json: function(data) {
            data.shoud.equal('Hey I am here!');
            done();
          }
        }
        let next = function() {
          throw new Error('This is an Error! Next should not have been reached!')
        }
        controller(book).getOne(req, res, next);
      })
      it('Should call next and return custom Error', (done) => {
        let book = {
          findOne: function() {
            return {
              exec: function(cb) {
                cb('Yo Im le custom Error!');
              }
            }
          }
        }
        let req = {
          params: {}
        }
        let res = {
          json: function() {
            throw new Error('Called json when it shant have! w-t-f?!')
          }
        }
        let next = function(err) {
          err.should.equal('Yo Im le custom Error!');
          done();
        }
        controller(book).getOne(req, res, next);
      })
    })
    // create() test: working and error
  describe('create()', () => {
      it('Should save the req.body and return an object', (done) => {
        let book = function(obj) {
          this.dateAdded = obj.dateAdded;
          this.title = obj.title;
          this.save = function(cb) {
            cb(null, this);
          }
        };
        let req = {
          body: {
            title: 'test'
          }
        };
        let res = {
          json: function(data) {
            data.should.be.an.instanceOf(Object);
            data.title.should.be.equal(test);
            should.exist(data.dateAdded);
            data.dateAdded.should.be.an.instanceOf(Number);
            done();
          }
        }
        let next = function() {
          throw new Error('This is an Error! Next should not have been reached!')
        }
        controller(book).create(res, req, next);
      })
      it('Should call the next and return custom Error', (done) => {
        let book = function() {
          this.save = function(cb) {
            cb('Yayyyy Im a good Error!')
          }
        };
        let req = {
          body: {}
        };
        let res = {
          json: function() {
            throw new Error('Called json, when it rather be sleeping in peace');
          }
        };
        let next = function(err) {
          err.should.equal('Yayyyy Im a good Error!');
          done();
        };
        controller(book).create(req, rest, next);
      })
    })
    // update() test: working and error
  describe('update()', () => {
      it('Should find object by specific id and return a message on success', (done) => {
        let book = {
          update: function(data, body, cb) {
            data._id.should.equal(3);
            data.body.should.equal('Hi I am the message ^___^');
            cb(null, 1)
          }
        };
        let req = {
          params: {
            id: 3
          },
          body: {
            //passing custom message
            message: 'Hi I am the message ^___^'
          }
        };
        let res = {
          json: function(data) {
            data.message.should.equal("Your book has been updated!");
            done();
          }
        };
        let next = function() {
          throw new Error('Shant have reached Meh!')
        };
        controller(book).update(res, req, next);
      });
      it('Should call next and return a custom Error', (done) => {
        let book = {
          update: function(data, body, cb) {
            cb('Fuhhhjjj...');
          }
        };
        let req = {
          params: {},
          body: {}
        };
        let res = {
          json: function(data) {
            throw new Error('I am res.json! Shant have reached Meh!')
          }
        };
        let next = function(err) {
          err.should.equal('Fuhhhjjj...');
          done();
        }
        controller(book).update(res, req, next);
      })
    })
    // remove() test: working and error
  describe('remove()', () => {
    it('Should find object by _id and remove it', (done) => {
      let book = {
        remove: function(data, cb) {
          data._id.should.equal(5)
          cb(null)
        }
      };
      let req = {
        params: {
          id: 5
        }
      }
      let res = {
        json: function(data) {
          data.message.should.equal('Your book entry has been deleted')
          done();
        }
      };
      let next = function() {
        throw new Error('Shant have reached Meh!')
      };
      controller(book).remove(req, res, next);
    })
    it('Should reach next function and return custom Error', (done) => {
      let book = {
        remove: function(data, cb) {
          cb('Error my nigg@!')
        }
      }
      let res = {
        params: {}
      }
      let req = {
        json: function() {
          throw new Error('I AM THE CUSTOM ERROR!!!')
        }
      };
      let next = function(err) {
        err.should.equal('I AM THE CUSTOM ERROR!!!');
        done();
      }
      controller(book).remove(res, req, next);
    })
  })
})
