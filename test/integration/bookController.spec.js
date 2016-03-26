'use strict';
let should = require('should');
let controller = require('../../api/bookController').controller;

describe('bookController', () => {
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
  // describe('create()', () => {
  //
  // })
})
